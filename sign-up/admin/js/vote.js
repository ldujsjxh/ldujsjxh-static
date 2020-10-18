const baseURL = 'http://192.168.43.178';

// toast弹框
const toastBox = $('#tip_toast');
// toast弹框的消息内容
let toastMsgBox = $('#toast_content');
// toast弹框进度条效果
let toastProgressBar = $('#toast_progress_bar');

let currentCandidateId = '';

(() => {
    initButton();
    // 初始化刷新按钮
    initRefresh();
    startLoad();

})()


// 开始循环获取信息并更新UI
function startLoad() {
    $('#refresh').html('正在刷新');
    $.ajax({
        type: 'GET',
        url: `${baseURL}/java/getNextCandidate`,
        success: dataArr => {
            let data = null;
            dataArr.forEach(item => {
                if (item.state == 2) {
                    data = item;
                }
            });
            console.log('data', data);
            // 获取当前存储LocalStorage中的数据
            const currentcandidateId = localStorage.getItem('vote-candidateId');

            if (currentcandidateId) {
                // id存在
                console.log('存在id');
                if (currentcandidateId != data.candidateId) {
                    // 不是同一个人则启动更新操作
                    updateUI(data);
                    currentCandidateId = data.candidateId;
                    // localStorage.setItem('vote-candidateId', data.candidateId);
                } else {
                    $('#refresh').html('刷新成功');
                    setTimeout(() => {
                        $('#refresh').html('刷新');
                    }, 2000);

                }
            } else {
                // id不存在
                console.log('id不存在');
                updateUI(data);
                currentCandidateId = data.candidateId;
                // localStorage.setItem('vote-candidateId', data.candidateId);
            }
        },
        error: (xmlHttpRequest, errMsg, errThrows) => {
            autoHideToast('同步信息失败，错误见控制台', false);
            console.log(errMsg);
        }

    });

    // const data = {
    //     "candidateId": "xxxx",
    //     "candidateName": "张三",
    //     "candidateStuId": "20192806666",
    //     "candidateAcademy": "信息与电气工程学院",
    //     "part": "网络部",
    //     "state": 1
    // }


    // candidateId: "3"
    // candidateName: "小刚"
    // candidateStuId: "20201234378"
    // desirableDepartment: "秘书处"
    // position: "逸夫楼B座210 计协办公室"
    // state: "2"


}
// 获取到了新的面试成员，更新UI
function updateUI(member) {
    $('#refresh').html('刷新成功');

    setTimeout(() => {
        $('#refresh').html('刷新');
    }, 2000);

    $('#name').html(member.candidateName);
    $('#stu_id').html(member.candidateStuId);
    $('#academy').html(member.candidateAcademy);
    $('#part').html(member.desirableDepartment);

    // 激活打分状态(取消禁用)
    $('#submit-score').html('提交');
    $('#submit-score').removeClass('btn-danger');
    $('#submit-score').addClass('btn-primary');
    $('#inputAttitudeSelect').prop('disabled', false);
    $('#inputAbilitySelect').prop('disabled', false);
    $('#submit-score').prop('disabled', false);

    //重置打分数据
    $(`#inputAttitudeSelect option:contains('选择分数...')`).prop("selected", true);
    $(`#inputAbilitySelect option:contains('选择分数...')`).prop("selected", true);

}

// 激活打分状态
function activeInput() {
    // 激活打分状态(取消禁用)
    $('#submit-score').html('提交');
    $('#submit-score').removeClass('btn-danger');
    $('#submit-score').addClass('btn-primary');
    $('#inputAttitudeSelect').prop('disabled', false);
    $('#inputAbilitySelect').prop('disabled', false);
    $('#submit-score').prop('disabled', false);

}
// 弹出提示消息并且自动隐藏
function autoHideToast(msg, isShowProgresBar) {
    if (isShowProgresBar) {
        toastProgressBar.show();
    } else {
        toastProgressBar.hide();
    }
    toastMsgBox.html(msg);
    toastBox.toast('show');
    // console.log(111);
    setTimeout(() => {
        toastBox.toast('hide');
        toastMsgBox.html('');
        toastProgressBar.hide();
    }, 3000);
}

// 对提交按钮做初始化操作
function initButton() {
    $('#submit-score').click(() => {

        // 关闭打分状态（ 禁用操作）
        $('#inputAttitudeSelect').prop('disabled', true);
        $('#inputAbilitySelect').prop('disabled', true);
        $('#submit-score').prop('disabled', true);

        $('#submit-score').html('提交成功');
        $('#submit-score').removeClass('btn-primary');
        $('#submit-score').addClass('btn-danger');

        // 态度分获取选中的值
        const attitudeVal = $('#inputAttitudeSelect option:selected').text();
        // 能力分选中值
        const abilityVal = $('#inputAbilitySelect option:selected').text();
        if (attitudeVal == '选择分数...' || abilityVal == '选择分数...') {
            autoHideToast('请完整打分', false);
        } else {
            // 别忘了弹出加载框
            $.ajax({
                type: 'POST',
                url: `${baseURL}/java/candidateScore`,
                data: {
                    candidateId: currentCandidateId,
                    score: parseInt((parseInt(attitudeVal) + parseInt(abilityVal)) / 2)
                },
                success: data => {
                    localStorage.setItem('vote-candidateId', currentCandidateId);
                    autoHideToast('打分成功', false);
                },
                error: (xmlHttpRequest, errMsg, errThrows) => {
                    // 此时要将localStorage中的id值清空以便重新打分
                    autoHideToast('打分失败', false);
                    console.log(errMsg);
                    activeInput();
                }

            });

        }
    });
}

function initRefresh() {
    $('#refresh').click(() => {
        startLoad();
    });
}