# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add a field for custom Agent IDs in the Facilities table

**Acceptance Criteria:**

* A new field for custom Agent IDs is added to the Facilities table in the database.
* Facilities can add and edit custom Agent IDs for Agents they work with through the platform.
* Custom Agent IDs are unique for each Facility and Agent.

**Time/effort estimate:** 2-3 hours

**Implementation details:**

* Add a new field for custom Agent IDs to the Facilities table in the database.
* Add an interface for Facilities to add and edit custom Agent IDs for Agents they work with.
* Validate that custom Agent IDs are unique for each Facility and Agent.

### Ticket 2: Update the getShiftsByFacility function to include custom Agent IDs in the Shift metadata

**Acceptance Criteria:**

* The getShiftsByFacility function is updated to include the custom Agent ID in the Shift metadata.
* The custom Agent ID for each Agent is included in the Shift metadata returned by the function.

**Time/effort estimate:** 1-2 hours

**Implementation details:**

* Modify the query used by the getShiftsByFacility function to join the custom Agent ID field from the Facilities table with the Agents table.
* Update the Shift metadata returned by the function to include the custom Agent ID for each Agent.

### Ticket 3: Display custom Agent IDs on reports

**Acceptance Criteria:**

* The generateReport function is updated to use the custom Agent ID instead of the internal database ID on the report.
* The custom Agent ID for each Agent is displayed on the report instead of their internal database ID.

Implementation Details:

* Modify the PDF generation code used by the generateReport function to use the custom Agent ID field from the Shift metadata instead of the internal database ID.
* Update the report layout to display the custom Agent ID for each Agent instead of their internal database ID.

### Ticket 4 (optional): Allow Facilities to download Shift data with custom Agent IDs in a CSV file

**Acceptance Criteria:** 

* A new feature is added to the platform to allow Facilities to download a CSV file containing Shift data with custom Agent IDs.
* The CSV file includes all Shift metadata, including the custom Agent ID for each Agent.

**Implementation Details:**

* Add a new button to the Shift data interface to enable Facilities to download a CSV file.
* Modify the query used to generate the CSV file to join the custom Agent ID field from the Facilities table with the Agents table.
* Include the custom Agent ID for each Agent in the CSV file.

**Note:**
This is an optional ticket that proposes a new feature to allow Facilities to download Shift data with custom Agent IDs in a CSV file. Although it was not part of the initial requirements, it is possible that the stakeholders or clients may see the value in having this additional functionality to provide further convenience and flexibility for Facilities.

Including this feature would allow Facilities to easily access and manipulate the Shift data with custom Agent IDs in their own data processing tools, without the need for any additional manual data entry.