'''
	•	signup: POST 요청이면 회원가입 폼의 유효성을 검사하고, 유효하면 사용자 데이터를 저장한 후 자동 로그인 처리한 뒤 로그인 페이지로 리다이렉트한다. GET 요청이면 회원가입 폼을 렌더링한다.
	•	CustomLoginView: EmailLoginForm을 사용해 이메일 기반 로그인을 처리하며, signin/login.html 템플릿을 사용한다.
	•	signin_redirect: 간단히 로그인 페이지로 리다이렉션한다.

'''
from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.views import LoginView
from .forms import CustomUserCreationForm, EmailLoginForm

# 회원가입 뷰
# POST 요청 시, 폼 유효성을 검사하고 유효하면 사용자를 저장한 후 로그인 처리하고 로그인 페이지로 리다이렉트한다. 
# GET 요청 시, 빈 회원가입 폼을 렌더링한다.

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)  # 데이터를 저장하기 전 상태로 유지
            user.save()  # 사용자 정보를 데이터베이스에 저장
            login(request, user)  # 회원가입 후 자동으로 로그인 처리
            return redirect('login')  # 회원가입 후 홈 페이지로 리다이렉트
    else:
        form = CustomUserCreationForm()
    
    return render(request, '../signin/login.html', {'form': form})




# 이메일 기반 로그인 뷰
# EmailLoginForm을 사용해 로그인 처리하며, 로그인 페이지 템플릿을 지정한다.

class CustomLoginView(LoginView):
    form_class = EmailLoginForm  # 이메일 기반 로그인 폼을 사용
    template_name = '../signin/login.html'  # 사용할 템플릿 경로 지정

# 로그인 페이지로 리디렉션하는 간단한 뷰
def signin_redirect(request):
    return redirect('login')  # 로그인 페이지로 리디렉션