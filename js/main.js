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
    let select = document.getElementById("selectNumber");
    let arr = [data.length-1];
    for (let i = 0; i<data.length; i++)
    {
        let opt = arr[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
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