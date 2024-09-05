"""
장고 프로젝트 설정파일

[추가 사항]
- INSTALLED_APPS 에서 signin 앱 추가
- TEMPLATES 설정에 'DIRS' 경로 추가
- DATABASES 설정에 MongoDB 연결 정보 추가 (djongo 사용)
- AUTH_USER_MODEL 설정에 사용자 모델 지정
- LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL 설정 추가

"""

from pathlib import Path
import os
from pymongo import MongoClient

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-sitdu%yzk_r0e8*)!8w7mf=h2!$4qc)2=*o*1(ih!51pr%2t)b'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    
    # 추가한 앱
    'signin',
    'rest_framework',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'account.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # 템플릿 파일이 위치한 디렉토리 경로
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'account.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'database',  # 클러스터 이름
        'ENFORCE_SCHEMA': False,
        'CLIENT': {
            'host': 'mongodb+srv://root:XGol9qjhYRpsPCY4@database.qlcdexd.mongodb.net/',
            'username': 'root',  # MongoDB Atlas에서 설정한 사용자 이름.
            'password': 'XGol9qjhYRpsPCY4',  # MongoDB Atlas에서 설정한 비밀번호
            'authSource': 'admin',
            'authMechanism': 'SCRAM-SHA-1'  # 인증 방식 설정 (필요시)
        }
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# 인증에 사용되는 User Model 지정
AUTH_USER_MODEL = 'signin.CustomUser'

# 로그인 후 리다이렉트할 URL 설정
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/login/'