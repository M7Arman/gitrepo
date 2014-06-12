from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=200)

class Book(models.Model):
    name = models.CharField(max_length=200)
    language = models.CharField(max_length=50)
    count = models.IntegerField(default=0)

class TempBookAuthor(models.Model):
    book = models.ForeignKey(Book)
    author = models.ForeignKey(Author)

bk = Book(name="Xent", language="Arm", count=5)

bk.save()
bk.id
bk.count
bk.name
Book.objects.all()
