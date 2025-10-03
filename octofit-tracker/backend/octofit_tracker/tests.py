from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class BasicModelTest(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Marvel', universe='Marvel')
        self.assertEqual(str(team), 'Marvel')
    def test_user_creation(self):
        team = Team.objects.create(name='DC', universe='DC')
        user = User.objects.create(name='Superman', email='superman@dc.com', team=team)
        self.assertEqual(str(user), 'Superman')
