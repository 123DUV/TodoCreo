import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(
    appBar: AppBar(
      title: const Text('Joan es gay'),
    ),
    body: const Center(child:  Text('5 clicks')),
        floatingActionButton: FloatingActionButton(
          onPressed: (){},
          child: const Icon(Icons.add),
        ),
      )
      
    );
      
    
    
  }
  
}