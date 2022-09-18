# Block-Pe: A Blockchain Based Billing & Asset Tracking Application

_Block Pe_ is a Billing & Asset Tracking Application developed for retail outlets of Xiaomi as an offcial hack submitted for Xiaomi Ode2code hackathon 2022.
It is developed as an _Anti-theft or Anti-smuggling Application_ for Xiaomi products.


It supports all the basic features of a conventional billing application but the _key feature_ of Block Pe is that _it uses a Blockchain
network to store the details of a product and the identification details of it's owner like Aadhar Card Number_. This data stored on
Blockchain is immutable and decentralised which makes it immune to hackers. Once the details are stored, the customer receives a _unique Hash ID_.
Any changes made to the product also changes the Hash ID.

# Advantages of Block Pe

1.) If the product gets stolen, the thief would visit the retail stores to sell the stolen product. But at the time of resell, the shopkeeper
would demand for the unique Hash ID which is private to the customer and stores unique identification details like Aadhar Card number.
Hence by using the Hash ID, the shopkeeper can verify whether the person reselling the product is the legitimate owner of it. 
The theif would be unable to provide unique authentication details like Aadhar Card at the time of resell, hence the shopkeeper could also alert the authorities
about the discrepancies found to catch hold of thief.

2.) The Blockchain network would also store the meta details of the product like _Shipment Details, Servicing Details, replacement of any part,
transfer of ownership etc_. This would offer more transparency to customers as they could access these information using their _unique HashID_ received
at the time of purchase. Also the shopkeeper can verify the details of the product at the time of resell and offer better price as _resell value_

3.) It would enable Xiaomi to keep a track of it's products individually, the life cycle phases undergone, servicing trends, customer habits etc.
This would help Xiaomi to make better business policies and improve upon their business strategies.

# Direct Access using URL:

We can access a limited number of features through the _Heroku_ provided URL such as SignUp/Login, Verifying the details using Hash Key, Fetching Transaction history and predicting resell value of an Old Xiaomin Product.

But in order to generate bill, store details on MongoDB server, send bills to Whatsapp and Email, we need to install the application on our local system. The details are mentioned below.

# Installation( Please refer PPT for video demonstration of installation process)

1.) Install NodeJS on your system and clone the repository on your local system.

2.) _STARTING FRONT-END ..._ 

Navigate to block-pe front-end and type _npm install_ to install dependencies of front end 


Navigate to front-end folder by writing _cd block-pe front-end_

Type _npm start_ to start the front-end server

3.) _STARTING IPFS SEVER..._

Navigate to IPFS server folder by writing _cd Block Pe IPFS_ and type _npm install_ to install the dependencies.

After installing the dependencies, run the following command _nodemon ipfs1.js_ .
