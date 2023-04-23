from django.shortcuts import render
from rest_framework import viewsets
from .models import GovScheme, Job, Intership, Hackathon
from .serializers import GovSchemeSerializer, JobSerializer, InternshipSerializer, HackathonSerializer

#Curd operation


class GovSchemeViewSet(viewsets.ModelViewSet):
    queryset=GovScheme.objects.all()
    serializer_class=GovSchemeSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset=Job.objects.all()
    serializer_class=JobSerializer

class InternshipViewSet(viewsets.ModelViewSet):
    queryset=Intership.objects.all()
    serializer_class=InternshipSerializer

class HackethonViewSet(viewsets.ModelViewSet):
    queryset=Hackathon.objects.all()
    serializer_class=HackathonSerializer