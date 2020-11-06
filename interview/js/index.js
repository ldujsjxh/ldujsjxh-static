const baseURL = 'http://www.alaskyed.com';

const interviewStateConstant = {
        doing: 2,
        undone: 0,
        done: 3,
        wating: 1
    }
    // 当前面试者数据
let currentInterviewPerson = undefined;
let currentWaitingPerson = undefined;

// 循环请求数据间隔（毫秒）
const intervalTime = 10 * 1000;


// 间隔3s发送一次请求
setInterval(() => {
    $.ajax({
        type: 'GET', //ajax请求方式: GET/POST, 默认:GET
        url: `${baseURL}/java/getNextCandidate`,
        success: data => {
            console.log('请求成功');
            // console.log(data);

            // // 刷新页面
            renderPage(data);
        },
        error: (XMLHttpRequest, errMsg, errThrown) => { //请求失败调用
            // console.log('请求失败', errMsg);
            // // 暂时模拟数据
            // renderPage('[{"candidateId":"xxxx","candidateName":"李四","candidateStuId":"20192806666","desirableDepartment":"网络部","candidateAcademy":"信息与电气工程学院","interviewStatus":1},{"candidateId":"xxxx","candidateName":"张三","candidateStuId":"20192806666","desirableDepartment":"网络部","candidateAcademy":"信息与电气工程学院","interviewStatus":0}]');
        }
    });
}, intervalTime);


// 传入成员的json形式字符串信息，渲染页面
function renderPage(memberInfos) {

    let interviewPerson = undefined;
    let waitingPerson = undefined;

    memberInfos.forEach(item => {
        if (item.state === interviewStateConstant.doing) {
            interviewPerson = item;
        } else {
            waitingPerson = item;
        }
    });

    if ((currentInterviewPerson != undefined) && (currentInterviewPerson.candidateId === interviewPerson.candidateId)) {
        return;
    }

    // 上滑效果隐藏
    $('.card-group').slideUp(500);
    setTimeout(() => {
        memberInfos.forEach(info => {
            const interviewCode = info.state;
            if (interviewCode == interviewStateConstant.doing) {
                currentInterviewPerson = info;
                // 正在面试
                $('#currentCandidate .my-card-head').text('正在面试');
                $('#currentCandidate .name').text(info.candidateName);
                $('#currentCandidate .stu_id').text('QQ：' + info.candidateStuId);
                //此次面试隐藏部门
                // $('#currentCandidate .part').text('部门：' + info.desirableDepartment);
                $('#currentCandidate .adddress').text('地点：' + '逸夫楼210计协办公室');

            } else if (interviewCode == interviewStateConstant.wating) {
                currentWaitingPerson = info;
                // 下一位准备
                $('#nextCandidate .my-card-head').text('下一位准备');
                $('#nextCandidate .name').text(info.candidateName);
                $('#nextCandidate .stu_id').text('QQ：' + info.candidateStuId);
                //此次面试隐藏部门
                // $('#nextCandidate .part').text('部门：' + info.desirableDepartment);
                $('#nextCandidate .adddress').text('地点：' + '逸夫楼210计协办公室');

            }
        });
        // 下滑效果显示
        $('.card-group').slideDown(500);
        currentMember = memberInfos;
        // 播放音频提示
        $('#change_music')[0].play();
    }, 500);

}