// reset버튼을 누르면 reset되기

$("#IDreset").click(function(){
    let inputID = $("#inputID").val().trim();
    if (inputID !== "") {
        $("#inputID").val('');
        $(this).css({
            "display":"none"
        })
    }
});
$("#PWreset").click(function(){
    let inputID = $("#inputPW").val().trim();
    if (inputID !== "") {
        $("#inputPW").val('');
        $(this).css({
            "display":"none"
        })
    }
});

// 아이디, 비밀번호 입력칸에 넣으면 표시되는 x표시
$("#inputID").on('change keyup paste',function () {
    let inputID = $("#inputID").val().trim();
    if (inputID == '') {
        $("#IDreset").css({
            "display":"none"
        });
    } else {
        $("#IDreset").css({
            "display":"inline"
        });
    }
});
$("#inputPW").on('change keyup paste',function () {
    let inputID = $("#inputPW").val().trim();
    if (inputID == '') {
        $("#PWreset").css({
            "display":"none"
        });
    } else {
        $("#PWreset").css({
            "display":"inline"
        });
    }
});


$("#btnLogin").click(function(){
    //아이디, 비밀번호 없을때 안내문, 아이디 공백 제거
    let inputID = $("#inputID").val().trim();
    let inputPW = $("#inputPW").val();
    if (inputID == "") {
        $("#warningID").css({
            "display" : "inline"
        });
    } else{
        $("#warningID").css({
            "display" : "none"
        });
    }
    if (inputPW =="") {
        $("#warningPW").css({
            "display" : "inline"
        });
    }else{
        $("#warningPW").css({
            "display" : "none"
        });
    }

});

///체크박스 활성화시 안내 탭
$("input#loginStayChk").click(function() {
    if ($("#loginStayChk").is(":checked")) {
        $(".stayTab").css({
        "display" : "inline"
    });
    } else {
        $(".stayTab").css({
            "display" : "none"
        });
    }
});

//IP보안 on/off
$(function() {
    $(".loginSetArea img").click(function(){
        $("#img_off").toggle(0);
    });
});

