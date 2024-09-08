'''

	•	urlpatterns: Django의 URL 패턴을 정의하는 리스트다. 각 URL 패턴은 특정 뷰와 매핑되어 있다.
	•	path: Django의 URL 라우팅 함수로, 특정 경로(URL)와 해당 경로를 처리할 뷰를 연결한다.
    
	•	'login/': 사용자가 /login/ 경로로 접근할 때 이 경로와 매칭된다.
	•	CustomLoginView.as_view(): 클래스 기반 뷰인 CustomLoginView를 호출해 로그인 페이지를 처리한다.
	•	name='login': 이 URL 패턴의 이름을 ‘login’으로 지정하여, 템플릿 등에서 이 이름으로 URL을 참조할 수 있게 한다.

	•	'signup/': 사용자가 /signup/ 경로로 접근할 때 이 경로와 매칭된다.
	•	signup: 함수 기반 뷰인 signup을 호출해 회원가입 페이지를 처리한다.
	•	name='signup': 이 URL 패턴의 이름을 ‘signup’으로 지정하여, 템플릿 등에서 이 이름으로 URL을 참조할 수 있게 한다.
'''
from django.urls import path
from .views import CustomLoginView, signup

urlpatterns = [
    path('login/', CustomLoginView.as_view(), name='login'), # 로그인 페이지
    path('signup/', signup, name='signup',), # 회원가입 페이지

]