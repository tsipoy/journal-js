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


if (journalEntry === 1) {
    alert(`title:  ${journal[0].title} \ncontent: ${journal[0].content}`);
    alert(`title:  ${journal[1].title} \ncontent: ${journal[1].content}`);
    alert(`title:  ${journal[2].title} \ncontent: ${journal[2].content}`);
    alert(`title:  ${journal[3].title} \ncontent: ${journal[3].content}`);
    }


if (journalEntry === 2) {
    let entryTitle = prompt("Enter your journal title");
    let entryContent = prompt("Enter your entry content");
        alert(`title: ${entryTitle} \ncontent: ${entryContent}`);
}






