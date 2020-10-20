// 基础地址
const baseURL = 'http://www.alaskyed.com'


// toast弹框
const toastBox = $('#tip_toast');
// toast弹框的消息内容
let toastMsgBox = $('#toast_content');
// toast弹框进度条效果
let toastProgressBar = $('#toast_progress_bar');

$('#submit_form').on('click', event => {
    const formVal = getFormVal();
    if (!formVal) {
        alert('信息不完整，请检查完成后提交');
    } else {
        // 禁用提交按钮
        $('#submit_form').prop('disabled', true);

        toastMsgBox.html('正在提交');
        toastBox.toast('show');
        $.ajax({
            type: 'POST',
            url: `${baseURL}/java/addCandidate`,
            data: formVal,
            success: data => {
                toastBox.toast('hide');
                if (data == 'yes') {
                    // 提交成功
                    alert('提交成功');
                    // 重定向到首页
                    location.href = '/';
                } else {
                    // 弹框提示信息（信息来自服务端）
                    alert('提交失败：' + data);
                    // 设置提交按钮为可用
                    $('#submit_form').prop('disabled', false);
                }

            },
            error: () => {
                alert('提交失败');
                toastBox.toast('hide');
                // 设置提交按钮为可用
                $('#submit_form').prop('disabled', false);

            }
        });
        console.log(formVal);
    }
    return false;
});


/*  获取表单序列化对象
    若有为填完的值则返回false
*/
function getFormVal() {
    const candidateName = $('#candidateName').val();
    const candidateStuId = $('#candidateStuId').val();
    const candidateAcademy = $('#candidateAcademy').val();
    const candidateClass = $('#candidateClass').val();
    const desirableDepartment = $('#desirableDepartment').val();
    const candidateObeyAdjust = $('#candidateObeyAdjust').val();

    let hasBlank = false;
    if (candidateName === '' || candidateStuId === '' || candidateAcademy === '' || candidateClass === '' || desirableDepartment === 'blank' || candidateObeyAdjust === 'blank') {
        hasBlank = true;
    }
    return hasBlank ? false : {
        candidateName,
        candidateStuId,
        candidateAcademy,
        candidateClass,
        desirableDepartment,
        candidateObeyAdjust
    };
}