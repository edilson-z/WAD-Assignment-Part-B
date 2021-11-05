# WAD Assignment Part B Documentation

**By Edilson Zau - 220090491** 


This project aimed to design and implement a CRUD (Create, Read, Update, Delete) app. 


## Its key functions should include: 

* Creating files
* Reading files
* Updatin files
* Deleting files


To run the files, Kafka should already be downloaded on the system. 

---

## Kafka Setup 

The consumer and producer need to be able to communicate through messages shared via a Kafka cluster. 

To run the files, Kafka should already be installed on the system. Zookeeper and Kafka Broker should be run. 

### Running Zookeeper 

Use the following command on the bin directory of Kafka to start zookeeper:
>zookeeper-server-start.bat --..\\..\config\zookeeper.properties


### Running Kafka-Broker

Use the following command on the bin directory of Kafka to start Kafka-Broker:

>kafka-server-start.bat ..\\..\config\server.properties

<!-- Once Zookeeper and Kafka-broker are running, the files can now be executed. -->


*Note it will not be necessary to run the consumer and producer in the Kafka setup, as it will be done in the ballerina files.*

---

## Ballerina Setup

Follow the instructions below to run the consumer and producer. 

*Note for the files to run successfully please run the consumer before the producer.*

### Running The Consumer 

Use the following command on the terminal to run the producer: 

>bal run consumer/

*Note you need to be inside the directory **'dsa-assignment-2'** for the commands to function.*

### Running The Producer 

Use the following command on the terminal to run the producer: 

>bal run producer/

*Note you need to be inside the directory **'dsa-assignment-2'** for the commands to function.*



