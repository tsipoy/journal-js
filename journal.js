console.log('it works');
const journal = [ {
        title : "Sunday 1, 2020",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aspernatur earum culpa quae veritatis ipsum sequi beatae, perferendis corporis architecto quasi debitis fuga accusamus in eum veniam animi voluptates id!"
    },
    {
        title : "Lucky day",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aspernatur earum culpa quae veritatis ipsum sequi beatae, perferendis corporis architecto quasi debitis fuga accusamus in eum veniam animi voluptates id!"
    },
    {
        title : "Memoring day",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aspernatur earum culpa quae veritatis ipsum sequi beatae, perferendis corporis architecto quasi debitis fuga accusamus in eum veniam animi voluptates id!"
    },
    {
        title : "New year, 2020",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aspernatur earum culpa quae veritatis ipsum sequi beatae, perferendis corporis architecto quasi debitis fuga accusamus in eum veniam animi voluptates id!"
    }
];


let journalEntry = Number(prompt("Welcome to my onja journal! \n Choose(1) for listing all the entries. \n Choose (2) for addind a new entries. \n Choose (3) to quit. \n Choose (4) for deleting the last entry"));


switch (journalEntry) {
    case 1:
        for (let i = 0; i < journal.length; i++) {
            let entryString = ` title: ${journal[i].title}
            
content: ${journal[i].content}`;
            alert(entryString);
        break;
        }
    case 2:
        const entryTitle = prompt("Enter your new entry title");
        const entryContent = prompt("Enter your new entry content");
        let entry = {
            title: entryTitle,
            content: entryContent,
        };
        journal.push(entry);
        break;
    case 4:
        const entryDeleted = journal.pop();
		alert(`We deleted the last entry : ${entryDeleted.title}`);
        break;
    case 5:
        let indexToDelete = Number(prompt("Enter an index to delete(1 to ${journal.length}"));
        
}





