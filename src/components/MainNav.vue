<template>
  <nav>
    <router-link to="/report">
      <i class="fa-solid fa-arrow-trend-up"></i>Report</router-link
    >
    <router-link to="/library">
      <i class="fa-solid fa-bolt"></i> Library</router-link
    >
    <router-link to="/people">
      <i class="fa-solid fa-user-group"></i> People</router-link
    >
    <router-link to="/activity"
      ><i class="fa-solid fa-list-check"></i> Activities</router-link
    >
    <h2>Support</h2>
    <router-link to="/"
      ><i class="fa-solid fa-lightbulb"></i> Get Started</router-link
    >
    <router-link to="/settings">
      <i class="fa-solid fa-gear"></i> Settings</router-link
    >
  </nav>
</template>

<style>
nav {
  display: flex;
  flex-direction: column;
}
nav a {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 20px;
  font-size: 1.2rem;
  margin-bottom: 25px;
  padding: 1.5rem;
  border-radius: var(--border-radius-md);
  text-decoration: none; /* Add this to remove underline */
}

nav a:hover,
nav a.router-link-active {
  background-color: var(--color-indigo-100);
  color: var(--color-indigo-700);
}

nav a:active {
  background-color: var(--color-indigo-100);
  color: var(--color-indigo-700);
}

nav h2 {
  margin-top: 25px;
  margin-bottom: 20px;
  font-weight: 200;
  padding: 1.5rem;
}
</style>
