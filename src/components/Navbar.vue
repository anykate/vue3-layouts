<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand fs-1" :to="{ name: 'Home' }">
        Vue3 Layouts
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name === 'Home' ? 'active fw-bold' : ''"
              aria-current="page"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="$route.name === 'Admin' ? 'active fw-bold' : ''"
              aria-current="page"
              :to="{ name: 'Admin' }"
              >Admin</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
