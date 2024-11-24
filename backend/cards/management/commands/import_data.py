import csv
import logging
from django.core.management.base import BaseCommand
from cards.models import Category, Card, Tag, CardTag
from django.contrib.auth.models import User

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = 'Import data from CSV file'

    def handle(self, *args, **options):
        #self.import_cards()
        #self.import_tags()
        #self.import_categories()
        self.create_card_tag()    
    
    def import_cards(self):
        with open('/home/tyron/flashcardy/todo_cards.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if int(row['fkCategoryCard_id']) in [5, 6]:
                    category = Category.objects.get(id=3)
                    user = User.objects.get(id=1)
                    Card.objects.create(
                        id=int(row['id']),
                        questionCard=row['questionCard'],
                        answerCard=row['answerCard'],
                        category=category,
                        user=user
                    )
        logger.info('Cards imported successfully')

    def import_tags(self):
        with open('/home/tyron/flashcardy/todo_category.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['name'] in ['design databases with postgresql', 'Learn data structures and algorithms with python']:
                    Tag.objects.create(
                        id=int(row['id']),
                        name=row['name'],
                    )
        logger.info('Tag imported successfully')
  
    def create_card_tag(self):
        with open('/home/tyron/flashcardy/todo_cards.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                try:
                    card = Card.objects.filter(id=int(row['id'])).first()
                    tag = Tag.objects.filter(id=int(row['fkCategoryCard_id'])).first()
                    if card and tag:
                        CardTag.objects.get_or_create(
                            card=card,
                            tag=tag
                        )
                except ValueError:
                    logger.warning(f"Invalid data in row: {row}")
                except Exception as e:
                    logger.error(f"Error processing row {row}: {e}")
        
        logger.info('CardTag created successfully')



                        
