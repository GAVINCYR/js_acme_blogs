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
    let options = [];
    data.forEach(user)
    {
        let opt = document.createElement('option');
        opt.value = user.id;
        opt.textContent = user.name;
        options.push(opt);
    }
    return options;
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