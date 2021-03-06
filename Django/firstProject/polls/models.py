from django.db import models

# Create your models here.

# Poll = author
class Poll(models.Model):
   question = models.CharField(max_length=200)
   pub_date = models.DateTimeField('date published')
   def __unicode__(self):
      return self.question

# Choice = book
class Choice(models.Model):
   poll = models.ForeignKey(Poll) #Poll-i key-i het
   choice_text = models.CharField(max_length=200)
   votes = models.IntegerField(default=0)



