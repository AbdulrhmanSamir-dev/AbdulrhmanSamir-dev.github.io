import 'dart:html' as html;
import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/projects.dart';
import 'contact_screen.dart';
import 'widgets/project_card.dart';

class HomePage extends StatelessWidget {
  HomePage({super.key});

  // Keys for scrolling
  final aboutKey = GlobalKey();
  final projectsKey = GlobalKey();
  final contactKey = GlobalKey();

  void scrollTo(GlobalKey key) {
    Scrollable.ensureVisible(
      key.currentContext!,
      duration: const Duration(milliseconds: 600),
      curve: Curves.easeInOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey,
        title: const Text('Abdulrhman Samir — Flutter Developer'),
        actions: [
          TextButton(
            onPressed: () => scrollTo(aboutKey),
            child: const Text('About', style: TextStyle(color: Colors.white)),
          ),
          TextButton(
            onPressed: () => scrollTo(projectsKey),
            child: const Text('Projects', style: TextStyle(color: Colors.white)),
          ),
          TextButton(
            onPressed: () => scrollTo(contactKey),
            child: const Text('Contact', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          final maxW = constraints.maxWidth;
          int crossAxisCount = 1;
          if (maxW > 1200) {
            crossAxisCount = 3;
          } else if (maxW > 760) {
            crossAxisCount = 2;
          }

          return CustomScrollView(
            slivers: [
              // About section
              SliverToBoxAdapter(
                key: aboutKey,
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Hello I\'m Abdulrhman Samir — Flutter Developer',
                        style: Theme.of(context).textTheme.headlineMedium,
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Pharmacy Graduate & Flutter Developer — Showcasing my key projects and professional links here.',
                      ),
                      const SizedBox(height: 16),
                      Wrap(
                        spacing: 12,
                        children: [
                          FilledButton(
                            onPressed: () {
                              html.window.open(
                                "https://github.com/AbdulrhmanSamir-dev/cv/raw/main/Abdulrhman%20Samir%20flutter%20cv.pdf",
                                "_blank",
                              );
                            },
                            child: const Text('Download CV'),
                          ),
                          OutlinedButton(
                            onPressed: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(builder: (context) => const ContactScreen()),
                              );

                            },
                            child: const Text('Contact Me'),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),

              // Projects section
              SliverPadding(
                key: projectsKey,
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 8),
                sliver: SliverGrid(
                  delegate: SliverChildBuilderDelegate(
                        (context, index) => ProjectCard(project: projects[index]),
                    childCount: projects.length,
                  ),
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: crossAxisCount,
                    crossAxisSpacing: 16,
                    mainAxisSpacing: 16,
                    childAspectRatio: crossAxisCount >= 3
                        ? 0.95   // desktop (taller tiles)
                        : (crossAxisCount == 2 ? 0.85 : 0.75),
                  ),
                ),
              ),

              // Contact section
              SliverToBoxAdapter(
                key: contactKey,
                child: Padding(
                  padding: const EdgeInsets.all(32),
                  child: Column(
                    children:  [
                      Text('Get in Touch', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600)),
                      SizedBox(height: 12),
                      Text('Feel free to reach me at:'),
                      SizedBox(height: 8),
                      SelectableText(
                        'abdulrhmansamir2021@gmail.com',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 20,),
                      QrImageView(data: 'https://wa.me/+201024094173',
                        version: QrVersions.auto,
                        size: 200,
                      ),
                      SizedBox(height: 20,),
                      ElevatedButton.icon(onPressed: ()async{
                        final Uri url =Uri.parse('https://wa.me/+201024094173');
                        if(await canLaunchUrl(url)){
                          await launchUrl(url, mode: LaunchMode.externalApplication);
                        }
                      }, label: Text("Open WhatsApp Link"),
                        icon: Icon(Icons.qr_code),)
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
