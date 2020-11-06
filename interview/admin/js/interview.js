// 基础URL
const baseURL = 'http://www.alaskyed.com';


// toast弹框
const toastBox = $('#tip_toast');
// toast弹框的消息内容
let toastMsgBox = $('#toast_content');
// toast弹框进度条效果
let toastProgressBar = $('#toast_progress_bar');
// 记录当前面板的id(带#)
let currentPanelId = '#xxx';

// 部门常量值
const depStrConstant = {
        netDep: '网络部',
        secDep: '秘书处',
        videoDep: '视频部',
        hardwareDep: '硬件部',
        artDep: '美编部',
        propaganda: '宣传部'
    }
    // 面板id和部门名称的映射关系
const depMap = {
        '#v-pills-secretary': depStrConstant.secDep,
        '#v-pills-hardware': depStrConstant.hardwareDep,
        '#v-pills-video': depStrConstant.videoDep,
        '#v-pills-art': depStrConstant.artDep,
        '#v-pills-net': depStrConstant.netDep,
        '#v-pills-propaganda': depStrConstant.propaganda
    }
    // 面试成员状态码常量值
const interviewStateConstant = {
        doing: 2,
        undone: 0,
        done: 3,
        wating: 1
    }
    // 是否服从调剂常量值
const isAdjustStateConstant = {
    // 服从
    obey: 0,
    // 不服从
    disObey: 1
}

$(() => {

    // 初始化事件监听
    initEventListener();
    // 加载第一屏的数据
    loadFirstData();




});


function getMemberListByDep(depStr) {
    // 显示加载框
    toastMsgBox.html('正在获取面试数据......');
    toastProgressBar.show();
    toastBox.toast('show');
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url: baseURL + '/java/getCondidatesByDepartment/' + depStr,
            success: data => {
                setTimeout(() => {

                    toastBox.toast('hide');
                    toastProgressBar.hide();
                }, 1000);

                resolve(data);

            },
            error: (XMLHttpRequest, errMsg, errThrown) => { //请求失败调用
                console.log('获取【' + depStr + '】成员列表失败');
                console.log('错误信息', errMsg);
                resolve(null);
            }
        });
    });

    // 暂时规定，状态码：1为正在等待，2为未面试，3为已经面试


    // const testData = [{
    //         "condidateId": "xxxx",
    //         "condidateName": "张三",
    //         "condidateStuId": "20192806666",
    //         "candidateAcademy": "信息与电气工程学院",
    //         "score": "0",
    //         "state": 1
    //     },
    //     {
    //         "condidateId": "xxxx",
    //         "condidateName": "张三",
    //         "condidateStuId": "20192806666",
    //         "condidateAcademy": "信息与电气工程学院",
    //         "score": "0",
    //         "state": 2
    //     }, {
    //         "condidateId": "xxxx",
    //         "condidateName": "张三",
    //         "condidateStuId": "20192806666",
    //         "condidateAcademy": "信息与电气工程学院",
    //         "score": "0",
    //         "state": 3
    //     },
    //     {
    //         "condidateId": "xxxx",
    //         "condidateName": "张三",
    //         "condidateStuId": "20192806666",
    //         "condidateAcademy": "信息与电气工程学院",
    //         "score": "0",
    //         "state": 2
    //     }
    // ]

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(testData);
    //         toastBox.toast('hide');
    //         toastProgressBar.hide();
    //     }, 200);
    // });

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


function tableItemClickEvent(id) {
    console.log(id);
}

// 根据传入的成员数组，用模板拼接html字符串
function getHtmlFromTemplate(memberList, depStr) {
    // 正在面试
    const doing = memberList.filter(item => item.state == interviewStateConstant.doing);
    // 未面试
    const undone = memberList.filter(item => item.state == interviewStateConstant.undone);
    // 已面试
    const done = memberList.filter(item => item.state == interviewStateConstant.done);
    // 正在等待
    const waiting = memberList.filter(item => item.state == interviewStateConstant.wating);
    // 修改人数统计状态
    $('#all_count').html(memberList.length);
    $('#done_count').html(done.length);
    $('#undone_count').html(undone.length);

    // 分类后的成员数组
    const allMember = [...doing, ...waiting, ...undone, ...done];
    // console.log('未面试', undone);
    // console.log('已面试', done);
    // console.log('正在等待', doing);
    // console.log('全部成员', allMember);
    let template = `
    <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">姓名</th>
                                    <th scope="col">QQ</th>
                                    <th scope="col">学院</th>
                                    <th scope="col">意向部门</th>
                                    <th scope="col">面试平均分</th>
                                    <th scope="col">是否服从调剂</th>
                                    <th scope="col">是否已经面试</th>
                                    <th scope="col">操作</th>
                                </tr>
                            </thead>
                            <tbody>
    `;
    allMember.forEach((member, index) => {
        // 解构成员信息对象
        const { candidateName, candidateStuId, candidateAcademy, state, score, candidateId, candidateObeyAdjust } = member;
        // 面试样式类
        let stateClass = 'undone';
        // 面试提示字符串
        let stateStr = '未面试';
        // 操作按钮事件
        let stateClick = '';

        switch (state) {
            case interviewStateConstant.doing:
                stateClass = 'doing';
                stateStr = '正在面试';
                break;
            case interviewStateConstant.wating:
                stateClass = 'doing';
                stateStr = '正在等待';
                break;
            case interviewStateConstant.undone:
                stateClass = 'undone';
                stateStr = '未面试';
                break;
            case interviewStateConstant.done:
                stateClass = 'done';
                stateStr = '已面试';
                break;
        }

        if (state === interviewStateConstant.undone) {
            stateClick = `memberWaiting('${candidateId}')`;
        }
        let btnText = '';
        if (state === interviewStateConstant.doing) {
            btnText = '正在面试';
        } else if (state === interviewStateConstant.wating) {
            btnText = '正在等待';
        } else {
            btnText = '等待';
        }

        template +=
            `
            <tr>
                                    <th scope="row">${index}</th>
                                    <td>${candidateName}</td>
                                    <td>${candidateStuId}</td>
                                    <td>${candidateAcademy}</td>
                                    <td>${depStr}</td>
                                    <td>${score}</td>
                                    <td>${candidateObeyAdjust === isAdjustStateConstant.disObey ? '不服从' : '服从'}</td>
                                    <td class="${stateClass}">${stateStr}</td>
                                    <td>
                                        <button type="button" class="btn ${(state === interviewStateConstant.doing || state === interviewStateConstant.wating) ?'btn-danger':'btn-primary'}" onclick="${stateClick}"${state === interviewStateConstant.done ? 'disabled':''}>${btnText}</button>
                                        <button type="button" class="btn btn-danger" onclick="deleteMemberInfo('${candidateId}')">删除</button>
                                    </td>
                                </tr>
            `;
    });
    template +=
        ` </tbody>
        </table>`;
    return template;
}

// 删除按钮点击事件
function deleteMemberInfo(candidateId) {
    // console.log(candidateId);

    toastMsgBox.html('正在同步......');
    toastProgressBar.show();
    toastBox.toast('show');
    // 发送ajax请求
    $.ajax({
        type: 'POST',
        url: `${baseURL}/java/deleteCondidatesById`,
        data: {
            candidateId: candidateId
        },
        success: data => {
            if (data === 'yes') {
                //成功,更新UI
                updateCurrentUI();

                toastBox.toast('hide');
                resetToast();
            }

        },
        error: (xmlHttpRequest, errMsg, errThrown) => {
            autoHideToast('请求失败,错误信息见控制台', false);
            console.log(errMsg);

        }
    });
}
// 等待按钮点击事件
function memberWaiting(candidateId) {
    toastProgressBar.show();
    toastMsgBox.html('正在同步......');
    toastBox.toast('show');
    //发送ajax请求
    $.ajax({
        type: 'POST',
        url: `${baseURL}/java/nextCandidate`,
        data: {
            candidateId: candidateId
        },
        success: data => {
            if (data === 'yes') {
                //成功,更新UI
                updateCurrentUI();

                toastBox.toast('hide');
                resetToast();
            }

        },
        error: (xmlHttpRequest, errMsg, errThrown) => {
            autoHideToast('请求失败,错误信息见控制台', false);
            console.log(errMsg);

        }
    });
    // alert(condidateStuId);
    // alert(currentPanelId);
}

function initEventListener() {

    // tab栏切换事件
    $('a[data-toggle="pill"]').on('shown.bs.tab', async function(e) {
        // 切换后的tab栏对应的面板id
        const panelId = $(e.target).attr('href');
        // 当前面板id更新为对应面板id
        currentPanelId = panelId;
        updateCurrentUI();
    });
}

async function loadFirstData() {
    // 当前面板id更新为秘书处面板id
    currentPanelId = '#v-pills-secretary';
    updateCurrentUI();
}

async function updateCurrentUI() {
    // 获取成员列表
    const depMember = await getMemberListByDep(depMap[currentPanelId]);
    console.log(depMember);
    if (depMember == 'err') {
        autoHideToast('获取成员列表失败,请刷新，报错信息见控制台', false);
    } else {
        const htmlStr = getHtmlFromTemplate(depMember, depMap[currentPanelId]);
        $(currentPanelId).html(htmlStr);
    }

}

// 重置toast消息为[无提示]，进度条样式为[隐藏]
function resetToast() {

    toastMsgBox.html('无提示');
    toastProgressBar.hide();

}