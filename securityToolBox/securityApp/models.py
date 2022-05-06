from django.db import models
from django.forms import CharField

# Create your models here.
class Categories(models.Model):
    CategoryId = models.AutoField(primary_key=True)
    CategoryName = models.CharField(max_length=100)

class Type(models.Model):
    TypeId = models.AutoField(primary_key=True)
    TypeName = models.CharField(max_length=100)

class Tool(models.Model):
    ToolId = models.AutoField(primary_key=True)
    ToolName = models.CharField(max_length=100)
    Category = models.CharField(max_length=100, default="None")
    ToolNotes = models.CharField(max_length=1000)
    ToolLink = models.URLField(max_length=200, null=True)

class Command(models.Model):
    CommandText = models.CharField(max_length=100)
    CommandNotes = models.CharField(max_length=1000)
    ToolKey = models.ForeignKey(Tool, on_delete=models.CASCADE, blank=True,null=True)