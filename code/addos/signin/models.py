# signin/models.py

'''
	•	CustomUserManager: 사용자 정의 모델인 CustomUser를 관리하기 위한 매니저 클래스, 사용자 및 슈퍼유저 생성 로직을 정의한다.
	•	create_user: 일반 사용자를 생성하는 메서드다.
	•	create_superuser: 슈퍼유저를 생성하는 메서드다.
	•	CustomUser: 사용자 정의 User 모델로, 이메일을 고유 식별자로 사용한다.
	•	email: 사용자의 고유 식별자 역할을 하는 이메일 필드다.
	•	ip_address: 사용자의 IP 주소를 저장하는 필드로, 필수가 아니다.
	•	password: 사용자의 비밀번호를 저장하는 필드다.
	•	is_staff: 사용자가 관리자인지를 나타내는 필드다.
	•	is_superuser: 사용자가 슈퍼유저인지를 나타내는 필드다.
	•	objects: CustomUserManager를 모델의 매니저로 설정하는 필드다.
	•	USERNAME_FIELD: 이메일을 사용자 고유 식별자로 사용하도록 설정한다.
	•	REQUIRED_FIELDS: 슈퍼유저를 생성할 때 추가로 요구되는 필드 리스트다.
	•	__str__: 사용자 객체를 문자열로 표현할 때 반환할 값을 정의하는 메서드다. 여기서는 사용자의 이메일을 반환한다.

'''
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, ip_address=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        
        email = self.normalize_email(email)
        user = self.model(email=email, ip_address=ip_address, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    password = models.CharField(max_length=128)

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'  # 이 부분이 설정되어 있어야 합니다
    REQUIRED_FIELDS = []  # 슈퍼유저 생성 시 추가로 요구하는 필드

    def __str__(self):
        return self.email