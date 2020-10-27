$('#enter').click(() => {
    const pwd = $('#exampleInputEmail1').val();

    $.ajax({
        type: 'POST',
        url: 'http://www.alaskyed.com/java/interviewAdmin',
        data: {
            adminPasswd: pwd
        },
        success: data => {
            console.log('请求成功', data);
            if (data == 'console') {
                location.href = '/sign-up/admin/interview.html';
            } else if (data == 'interview') {
                location.href = '/sign-up/admin/vote.html';
            } else {
                $('#psd_wrong').modal('show');
                $('#psd_wrong').on('hide.bs.modal', () => {
                    $('#psd_wrong').modal('show');
                    $('#exampleInputEmail1').val('');
                });
            }

        },
        error: (XMLHttpRequest, errMsg, errThrown) => {
            alert('网络错误：' + errMsg);

        }
    });

});