var div_login = document.getElementById('login_card');
var div_signup = document.getElementById('signup_card');
var div_supr = document.getElementById('supr_login_card');
var div_admin = document.getElementById("admin_login_card");
var div_back_regular = document.getElementById("back_regular_card");
/*var login_btn = document.getElementById('btn_login');
var signup_btn = document.getElementById('btn_signup');*/
var btn_goto_login = document.getElementById('btn_login_form');
var btn_goto_signup = document.getElementById('btn_signup_form');
var btn_goto_supr = document.getElementById('btn_supr_form');
var btn_goto_admin = document.getElementById('btn_admin_form');
var btn_regular = document.getElementById('btn_back_regular');

btn_goto_login.onclick = function()
{
    div_login.style.display = "block";
    div_signup.style.display = "none";
    div_supr.style.display = "none";
    div_admin.style.display = "none";
    div_back_regular.style.display = "none";
};
btn_goto_signup.onclick = function()
{
    div_login.style.display = "none";
    div_signup.style.display = "block";
    div_supr.style.display = "none";
    div_admin.style.display = "none";
    div_back_regular.style.display = "none";
};

btn_goto_supr.onclick = function()
{
    div_login.style.display = "none";
    div_signup.style.display = "none";
    div_supr.style.display = "block";
    div_admin.style.display = "none";
    div_back_regular.style.display = "block";
};

btn_goto_admin.onclick = function()
{
    div_login.style.display = "none";
    div_signup.style.display = "none";
    div_supr.style.display = "none";
    div_admin.style.display = "block";
    div_back_regular.style.display = "block";
};

btn_regular.onclick = function()
{
    div_login.style.display = "block";
    div_signup.style.display = "none";
    div_supr.style.display = "none";
    div_admin.style.display = "none";
    div_back_regular.style.display = "none";
};
