'''
account/urls.py 구성
=> Django 프로젝트의 URL 설정
[URL 패턴 설명]
- signin_redirect: signin/ 경로로 접속하면 signin_redirect 뷰로 이동(login 페이지로 리디렉션)
- signin/ 경로: signin/login으로 리다이렉트 되는 signin_redirect 포함 (signin/views.py에 정의함)
- signin/ 경로 include() 함수를 사용해 signin/urls.py 파일로 이동(Template에 있는 HTML 불러오기)


'''
from django.contrib import admin
from django.urls import path, include
from signin.views import signin_redirect


urlpatterns = [
    path('admin/', admin.site.urls),
    path('signin/', signin_redirect), # signin/ 경로로 접속하면 signin_redirect 뷰로 이동(login 페이지로 리디렉션)
    path('signin/', include('signin.urls')),
    
]