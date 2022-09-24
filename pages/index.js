import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-3xl font-bold'>Next tailwind Amazona</h1>
     
    </div>
  )
}


h) HelpDeskStaff (extends Staff super class)
HelpDeskStaff ( ) - This method is the constructor method for the class and is run every time an object of this class is created.
addMember ( ) - This method adds a new member to the members list by creating new member object.
addService ( ) - This method adds a new service to the services list by creating new service object.
removeMember ( ) - This method removes a member from the members list.
removeService ( ) - This method removes a service from the services list.
applyDiscount ( ) - This method applies a discount for the members.
createInvoice ( ) - This method creates and displays an invoice for a search result.
calSalary ( ) - This method calculates the salary of the staff member.

i) GymReceptionistStaff (extends Staff super class)
GymReceptionistStaff ( ) - This method is the constructor method for the class and is run every time an object of this class is created.
addMember ( ) - This method adds a new member to the members list by creating new member object.
removeMember ( ) - This method removes a member from the members list.
calSalary ( ) - This method calculates the salary of the gym receptionist.

j) InstructorStaff (extends Staff super class)
InstructorStaff ( ) - This method is the constructor method for the class and is run every time an object of this class is created.
setClass ( ) - This method assigns the specific class service to the instructor.
getClass( ) - This method returns the class service assigned to the instructor.
calSalary ( ) - This method calculates the salary of the instructor.


