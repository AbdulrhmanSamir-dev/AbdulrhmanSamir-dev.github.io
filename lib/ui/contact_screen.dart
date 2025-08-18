import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactScreen extends StatefulWidget {
  const ContactScreen({super.key});

  @override
  State<ContactScreen> createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _messageController = TextEditingController();

  Future<void> _openWhatsApp(String message) async {
    final Uri url = Uri.parse("https://wa.me/+201024094173?text=$message");
    if (await canLaunchUrl(url)) {
      await launchUrl(url, mode: LaunchMode.externalApplication);
    }
  }

  Future<void> _sendEmail(String message) async {
    final Uri emailLaunchUri = Uri(
      scheme: 'mailto',
      path: 'abdulrhmansamir2021@gmail.com',
      query: 'subject=Portfolio Contact&body=$message',
    );

    if (await canLaunchUrl(emailLaunchUri)) {
      await launchUrl(emailLaunchUri);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Contact Me")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _messageController,
                decoration: const InputDecoration(
                  labelText: "Write Your Message",
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Please, Write Your Message";
                  }
                  return null;
                },
                maxLines: 3,
              ),
              const SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton.icon(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _openWhatsApp(_messageController.text);
                      }
                    },
                    icon: const Icon(Icons.message),
                    label: const Text("WhatsApp"),
                  ),
                  ElevatedButton.icon(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        _sendEmail(_messageController.text);
                      }
                    },
                    icon: const Icon(Icons.mail),
                    label: const Text("Email"),
                  ),
                ],
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
    );
  }
}
