class Project {
  final String title;
  final String repoPath;
  final String description;
  final List<String> tech;
  final bool team;
  final String folder; // assets/images/<folder>/

  const Project({
    required this.title,
    required this.repoPath,
    required this.description,
    required this.tech,
    required this.folder,
    this.team = false,
  });

  String get repoUrl => 'https://github.com/' + repoPath;
}

const projects = <Project>[
  Project(
    title: 'Monkey Meal (Team Project)',
    repoPath: 'klilmhdi/monkey_meal_project',
    description: 'Team project: food delivery style app developed collaboratively.',
    tech: ['Flutter', 'Teamwork'],
    folder: 'Monkey Meal (Team Project)',
    team: true,
  ),
  Project(
    title: 'Movies App',
    repoPath: 'AbdulrhmanSamir-dev/Movies',
    description: 'App to display movie lists and details using an API.',
    tech: ['Flutter', 'HTTP API'],
    folder: 'Movies App',
  ),
  Project(
    title: 'Fruit Hub',
    repoPath: 'AbdulrhmanSamir-dev/Fruit_Hup',
    description: 'Fruit store app with login, order tracking and UI screens.',
    tech: ['Flutter', 'BLoC'],
    folder: 'Fruit Hub',
  ),
  Project(
    title: 'Weather App',
    repoPath: 'AbdulrhmanSamir-dev/Weather_App',
    description: 'Weather application showing forecasts using an API.',
    tech: ['Flutter', 'HTTP API'],
    folder: 'Weather App',
  ),
  Project(
    title: 'News App',
    repoPath: 'AbdulrhmanSamir-dev/News_App',
    description: 'News application with categories and article previews.',
    tech: ['Flutter', 'HTTP API'],
    folder: 'News App',
  ),
  Project(
    title: 'Notes App',
    repoPath: 'AbdulrhmanSamir-dev/Notes',
    description: 'A simple notes app with local storage.',
    tech: ['Flutter', 'Local Storage'],
    folder: 'Notes App',
  ),
  Project(
    title: 'Simple Store App',
    repoPath: 'AbdulrhmanSamir-dev/Simple_Store_App',
    description: 'A simple store app with product listing and shopping cart.',
    tech: ['Flutter', 'State Management'],
    folder: 'Simple Store App',
  ),
  Project(
    title: 'Dominos Points Counter',
    repoPath: 'AbdulrhmanSamir-dev/Dominos_Points_Counter',
    description: 'A counter app to track and manage Dominos points easily.',
    tech: ['Flutter'],
    folder: 'Dominos Points Counter',
  ),
  Project(
    title: 'Tunes App',
    repoPath: 'AbdulrhmanSamir-dev/Tunes',
    description: 'Simple music/sound app for learning and testing audio features.',
    tech: ['Flutter', 'Audio'],
    folder: 'Tunes App',
  ),
  Project(
    title: 'Tuko',
    repoPath: 'AbdulrhmanSamir-dev/Tuko',
    description: 'Demo app to showcase product listing with clean UI.',
    tech: ['Flutter'],
    folder: 'Tuko',
  ),
];
