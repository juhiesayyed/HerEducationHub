# Generated by Django 4.1.7 on 2023-03-28 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HEHGovSchemes', '0003_job_jobdes'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='JobSkills',
            field=models.CharField(default=0, max_length=600),
            preserve_default=False,
        ),
    ]
