# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 22:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0008_auto_20171203_2011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='link',
            name='links',
            field=models.ManyToManyField(blank=True, to='books.Link'),
        ),
    ]