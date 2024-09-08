'''

Django의 회원가입 폼을 커스텀하기 위한 파일

- class CustomUserCreationForm: 회원가입 폼 커스텀
- Meta(customUser): 회원가입 폼에 필요한 필드, 이메일, 비밀번호, IP주소

- class EmailLoginForm: 이메일 로그인 폼 커스텀
- Meta(EmailLoginForm): 이메일 로그인 폼에 필요한 필드, 이메일과 비밀번호

'''

from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model

class CustomUserCreationForm(UserCreationForm):
    ip_address = forms.GenericIPAddressField(label='IP Address', required=True)

    class Meta:
        model = get_user_model()
        fields = ['email', 'password1', 'password2', 'ip_address']  # 회원가입에 필요한 필드

class EmailLoginForm(AuthenticationForm):
    username = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'autofocus': True}))

    class Meta:
        model = get_user_model()
        fields = ['email', 'password']