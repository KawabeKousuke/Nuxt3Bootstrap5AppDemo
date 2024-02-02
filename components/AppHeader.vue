[16:25] 福元 洋貴
<template>
    <header class="AppHeader">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/nikushoku" class="button carnivore">肉食</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/soshoku" class="button herbivore">草食</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
 
<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
}
 
.container nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}
 
.container nav ul li {
    margin: 0 10px;
}
 
.button {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-weight: bold;
}
 
.carnivore {
    background-color: #d9534f;
}
 
.carnivore:hover {
    background-color: #c9302c;
}
 
.herbivore {
    background-color: #5cb85c;
}
 
.herbivore:hover {
    background-color: #4cae4c;
}
</style>