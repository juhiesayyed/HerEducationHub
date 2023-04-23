from django.db import models


class GovScheme(models.Model):
    SchemeName = models.CharField(max_length=300)
    SchemeLink = models.CharField(max_length=600)
    SchemeDescription = models.CharField(max_length=600)
    SchemeElig = models.CharField(max_length=500)

    def __str__(self):
        return self.SchemeName
        

class Job(models.Model):
    Companyname = models.CharField(max_length=300)
    Jobtitle = models.CharField(max_length=300)
    JobSkills =models.CharField(max_length=600)
    JobDes = models.CharField(max_length=600)
    Eligibility = models.CharField(max_length=600)
    levelOfEdu = models.CharField(max_length=400)
    link  = models.CharField(max_length=800)
    salary = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    entryLevel= models.CharField(max_length=300)

    def __str__(self):
        return self.Jobtitle

class Intership(models.Model):
    Companyname = models.CharField(max_length=300)
    position = models.CharField(max_length=300)
    requirement = models.CharField(max_length=500)
    levelOfEducation = models.CharField(max_length=200)
    Eligibility =  models.CharField(max_length=600)
    Link = models.CharField(max_length=1000)
    Stipend = models.CharField(max_length=100)
    location = models.CharField(max_length=300)

    def __str__(self):
        return self.Companyname

class Hackathon(models.Model):
    hackathontitle = models.CharField(max_length=200)
    Organizer = models.CharField(max_length=200)
    HackDesc = models.CharField(max_length=700)
    Startdate = models.CharField(max_length=200)
    Enddate = models.CharField(max_length=200)
    Location = models.CharField(max_length=400)
    Link = models.CharField(max_length=1000)

    def __str__(self):
        return self.hackathontitle
