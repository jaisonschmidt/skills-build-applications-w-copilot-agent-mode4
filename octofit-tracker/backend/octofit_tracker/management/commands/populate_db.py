from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Limpar dados existentes
        Activity.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Criar equipes
        marvel = Team.objects.create(name='Marvel', universe='Marvel')
        dc = Team.objects.create(name='DC', universe='DC')

        # Criar usuários
        users = [
            User.objects.create(name='Homem-Aranha', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Capitão América', email='cap@marvel.com', team=marvel),
            User.objects.create(name='Superman', email='superman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        # Criar atividades
        Activity.objects.create(user=users[0], type='Corrida', duration=30, date='2025-10-01')
        Activity.objects.create(user=users[1], type='Ciclismo', duration=45, date='2025-10-02')
        Activity.objects.create(user=users[2], type='Natação', duration=60, date='2025-10-03')
        Activity.objects.create(user=users[3], type='Musculação', duration=50, date='2025-10-04')

        # Criar placar de líderes
        Leaderboard.objects.create(team=marvel, points=150)
        Leaderboard.objects.create(team=dc, points=120)

        # Criar treinos
        treino1 = Workout.objects.create(name='Treino de Força', description='Treino focado em força para super-heróis.')
        treino2 = Workout.objects.create(name='Treino de Resistência', description='Treino para aumentar a resistência dos heróis.')
        treino1.suggested_for.add(marvel, dc)
        treino2.suggested_for.add(marvel)

        self.stdout.write(self.style.SUCCESS('Banco de dados populado com dados de teste!'))
