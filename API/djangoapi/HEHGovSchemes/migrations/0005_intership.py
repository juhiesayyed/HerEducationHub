# Generated by Django 4.1.7 on 2023-03-28 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HEHGovSchemes', '0004_job_jobskills'),
    ]

    operations = [
        migrations.CreateModel(
            name='Intership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Companyname', models.CharField(max_length=300)),
                ('position', models.CharField(max_length=300)),
                ('requirement', models.CharField(max_length=500)),
                ('levelOfEducation', models.CharField(max_length=200)),
                ('Eligibility', models.CharField(max_length=600)),
                ('Link', models.CharField(max_length=1000)),
                ('Stipend', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=300)),
            ],
        ),
    ]
