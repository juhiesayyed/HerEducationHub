from rest_framework import serializers
from .models import GovScheme, Job, Intership, Hackathon

class GovSchemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GovScheme
        fields = "__all__"

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intership
        fields = "__all__"

class HackathonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hackathon
        fields = "__all__"