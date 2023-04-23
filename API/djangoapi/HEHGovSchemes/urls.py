from django.contrib import admin
from django.urls import path, include
#from . import views
from HEHGovSchemes.views import GovSchemeViewSet,JobViewSet,InternshipViewSet, HackethonViewSet
from rest_framework import routers

router= routers.DefaultRouter()
router.register(r'WomenGovSchemes', GovSchemeViewSet)
router.register(r'JobList',JobViewSet)
router.register(r'IntershipList',InternshipViewSet)
router.register(r'Hackethons',HackethonViewSet)

urlpatterns = [
    path('',include(router.urls))
]
