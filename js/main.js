function createElemWithText(element="p", textContent="", className) //done
{
    const newElement = document.createElement(element);
    const text = document.createTextNode(textContent);
    newElement.appendChild(text);
    if(className)
    {
        newElement.setAttribute('class', className);
    }
    return newElement;
}
function createSelectOptions(data) //done
{
    if (!data) return;
    const options = [];
    data.forEach((user) => {
        const opt = document.createElement("option");
        opt.value = user.id;
        opt.textContent = user.name;
        options.push(opt);
    });
    return options;
}
function toggleCommentSection(postID)
{
    if (!postID) return;
    let section = document.querySelectorAll('[data-post-id]');
    let section1 = section.querySelector(postID);
    if (!section1) return null;
    section1.classList.toggle("hide");
    return section1;
}
function toggleCommentButton(postID)
{
    if (!postID) return;
    let section = document.querySelectorAll('[data-post-id]');
    let section1 = section.querySelector(postID);
    if (!section1) return null;
    section1.textContent =
        section1.textContent === "Show Comments"
            ? "Hide Comments"
            : "Show Comments";
}
function deleteChildElements(parent)
{
    if (!parent) return;
}
function addButtonListeners()
{

}
function removeButtonListeners()
{

}
function createComments(data)
{
    
}
function populateSelectMenu(data)
{

}
function getUsers()
{

}
function getUserPosts(userID)
{

}
function getUser(userID)
{

}
function getPostComments(postID)
{

}
async function displayComments(postID)
{

}
async function createPosts(data)
{

}
async function displayPosts(data)
{

}
function toggleComments(event, postID)
{

}
async function refreshPosts(data)
{

}
async function selectMenuChangeEventHandler(event)
{

}
async function initPage()
{

}
function initApp()
{

}