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
function createSelectOptions(data)
{
    if (!data) return;
    let options = data;
    let select = document.getElementById("selectNumber");
    for (let i = 0; i < options.length; i++)
    {
        let option = options[i];
        select.options.add(new Option(option.text, option.value, option.selected));
    }
    return select;
}
function toggleCommentSection(postID)
{

}
function toggleCommentButton(postID)
{

}
function deleteChildElements(parent)
{

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