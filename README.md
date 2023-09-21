## Eat-N-Split


#### - In This App, There are 5 Components and the root component.

##### - Components are  (FormAddFriend, FormSplitBill, FriendList, Friend, Button).
<br>

###### 1- FormAddFriend: contains a form for adding new friends and creating new objects to set new friends in Friendlist.  
    - Using useSatet to manage my own state.
    - Using crypto.randomUUID() to generate randomID.

###### 2- FriendList: used to display friends on a webpage.
    - Using map() method to loop on the list.
    - Create a new component called a friend for each friend.
    - Using props to get friendArrayList from parentComponent(App).


###### 3- Friend: used to display each friend.
   

###### 4- FormSplitBill: used to Split bills between friends.
    - Also using useSatet to manage state.
    - Using concept left up State for modify state in the parent component.
  
###### 5- Button: in the app, there are a lot of buttons so create a button component to make it reusable.



