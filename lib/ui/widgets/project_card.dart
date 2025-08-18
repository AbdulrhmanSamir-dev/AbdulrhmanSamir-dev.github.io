import 'dart:convert';
import 'dart:html' as html;
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../../data/projects.dart';
import '../image_preview_screen.dart';

class ProjectCard extends StatelessWidget {
  final Project project;
  const ProjectCard({super.key, required this.project});

  Future<List<String>> _loadProjectImages(BuildContext context) async {
    final manifestJson =
    await DefaultAssetBundle.of(context).loadString('AssetManifest.json');
    final Map<String, dynamic> manifestMap =
    json.decode(manifestJson) as Map<String, dynamic>;

    final prefix = 'assets/images/${project.folder}/';
    const exts = ['.png', '.jpg', '.jpeg', '.webp'];

    final images = manifestMap.keys
        .where((k) => k.startsWith(prefix) &&
        exts.any((e) => k.toLowerCase().endsWith(e)))
        .toList()
      ..sort();

    return images;
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      // leave spacing to the grid
      margin: EdgeInsets.zero,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      elevation: 6,
      clipBehavior: Clip.antiAlias,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header: title + GitHub
            Row(
              children: [
                if (project.team)
                  const Padding(
                    padding: EdgeInsets.only(right: 6),
                    child: Icon(Icons.groups, size: 20),
                  ),
                Expanded(
                  child: Text(
                    project.title,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      height: 1.1,
                    ),
                  ),
                ),
                IconButton(
                  tooltip: 'Open on GitHub',
                  icon: const Icon(Icons.open_in_new),
                  onPressed: () => html.window.open(project.repoUrl, '_blank'),
                ),
              ],
            ),
            const SizedBox(height: 8),

            // Description (cap lines to avoid overflow)
            Text(
              project.description,
              maxLines: 3,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 14, color: Colors.black87, height: 1.2),
            ),
            const SizedBox(height: 12),

            // Fixed-height (relative) image area so card always fits
            AspectRatio(
              // shorter than 16/9 so the card gets more vertical room
              aspectRatio: 16 / 10,
              child: FutureBuilder<List<String>>(
                future: _loadProjectImages(context),
                builder: (context, snapshot) {
                  final images = snapshot.data ?? [];

                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  }

                  if (images.isEmpty) {
                    return Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        color: Colors.black12,
                      ),
                      child: const Center(
                        child: Text('No images found for this project'),
                      ),
                    );
                  }

                  return ClipRRect(
                    borderRadius: BorderRadius.circular(12),
                    child: CarouselSlider.builder(
                      itemCount: images.length,
                      itemBuilder: (context, index, realIdx) {
                        final path = images[index];
                        return GestureDetector(
                          onTap: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (_) => ImagePreviewScreen(imagePath: path),
                              ),
                            );
                          },
                          child: Image.asset(
                            path,
                            fit: BoxFit.cover,
                            width: double.infinity,
                          ),
                        );
                      },
                      options: CarouselOptions(
                        viewportFraction: 1.0,
                        enlargeCenterPage: false, // prevents extra growth in height
                        autoPlay: true,
                        autoPlayInterval: const Duration(seconds: 4),
                        autoPlayAnimationDuration: const Duration(milliseconds: 600),
                      ),
                    ),
                  );
                },
              ),
            ),

            const SizedBox(height: 10),

            // Tech chips
            Wrap(
              spacing: 6,
              runSpacing: -8,
              children: [
                for (final t in project.tech)
                  Chip(label: Text(t), visualDensity: VisualDensity.compact),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
