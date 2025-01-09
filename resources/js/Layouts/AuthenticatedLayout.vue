<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);

</script>

<template>
  <div>
    <div class="min-h-screen min-w-[400px] bg-[#F2F0F6]">
      <nav class="w-full fixed bg-[#F2F0F6] z-50">
        <div class="py-[15px] pl-[24px] pr-[50px]">
          <div class="flex justify-between">
            <div class="flex">
              <!-- Logo -->
              <div class="logo-wrap px-[10px] py-[5px]">
                <!-- <Link :href="route('dashboard')">
                <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800" />
                </Link> -->
                <div class="logo flex gap-1 justify-between align-center">
                  <div
                    class="logo-svg flex justify-center align-center relative w-[29px] h-[29px] rounded-full bg-[#9B5FF8]">
                    <img src="/assets/Image/icon/logo-1.svg" class="absolute top-[5px] left-0" />
                    <img src="/assets/Image/icon/logo-2.svg" class="absolute top-[5px] right-[2px]" />
                  </div>
                  <Link :href="route('dashboard')">
                    <h1 class="text-[20px] font-[900] font-sans1">
                      Marketing
                      <span class="font-[400]">Blocks</span>
                    </h1>
                </Link>
                </div>
              </div>

              <!-- Navigation Links -->
              <!-- <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                  Dashboard
                </NavLink>
              </div> -->
            </div>

            <div class="hidden sm:ms-6 sm:flex sm:items-center">
              <div class="flex gap-2">
                <div class="flex gap-2">
                  <div
                    class="flex justify-center align-center w-[40px] h-[40px] bg-[#FFF8E0] rounded-full border-[1px] border-[#E3A504]">
                    <img src="/assets/Image/icon/medal.png" alt="Medal" class="w-[12px] h-[21px] m-auto" />
                  </div>
                  <div class="relative w-[40px] h-[40px]">
                    <img src="/assets/Image/icon/bell.png" alt="Medal" class="w-full m-auto" />
                    <div
                      class="absolute top-[3px] left-[25px] pt-[2px] w-[18px] h-[18px] bg-[#FB5C5C] rounded-full border-[2px] border-white text-white text-[9px] text-center font-sans1">
                      23</div>
                  </div>
                  <div>
                    <button
                      class="flex justify-center align-center gap-1 w-[142px] bg-[#6231EF] px-[15px] py-[10px] rounded-[5px] text-[14px] text-white text-nowrap display-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" class="w-4 h-4 m-auto">
                        <path fill="currentColor"
                          d="M10.5 5.287a1.78 1.78 0 0 0-.525-1.262 1.831 1.831 0 0 0-2.528 0L.525 10.948a1.787 1.787 0 0 0 2.526 2.527L9.975 6.55a1.777 1.777 0 0 0 .525-1.264Zm-8.274 7.364a.634.634 0 0 1-.875 0 .62.62 0 0 1 0-.875l4.532-4.532.878.878-4.535 4.53Zm6.925-6.925L7.583 7.294l-.875-.877 1.569-1.568a.62.62 0 1 1 .875.875v.002Zm-6.314-4.06.904-.259.258-.904a.695.695 0 0 1 1.336 0l.257.904.905.258a.695.695 0 0 1 0 1.336l-.905.258-.257.904a.695.695 0 0 1-1.336 0L3.74 3.26l-.904-.258a.695.695 0 0 1 0-1.336ZM13.497 10l-.905.258-.258.904a.694.694 0 0 1-1.335 0l-.258-.904L9.837 10a.695.695 0 0 1 0-1.336l.904-.258.258-.904a.695.695 0 0 1 1.335 0l.258.904.904.258a.695.695 0 0 1 0 1.336Zm-3.14-8.543.791-.226.227-.792a.607.607 0 0 1 1.167 0l.225.791.791.226a.608.608 0 0 1 0 1.167l-.79.225-.226.793a.607.607 0 0 1-1.167 0l-.226-.79-.792-.227a.608.608 0 0 1 0-1.167Z">
                        </path>
                      </svg>
                      Create With AI
                    </button>
                  </div>
                </div>
                <!-- Settings Dropdown -->
                <div class="avatar relative">
                  <Dropdown align="right" width="min-w-[272px]">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <button type="button"
                          class="w-[40px] h-[40px] p-auto rounded-full bg-[#1570EF] text-white font-inter text-[16px] transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none">
                          <!-- {{ $page.props.auth.user.name }} -->
                          TC
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <!-- <DropdownLink :href="route('profile.edit')">
                        Profile
                      </DropdownLink>
                      <DropdownLink :href="route('logout')" method="post" as="button">
                        Log Out
                      </DropdownLink> -->
                      <div class="min-w-[272px] lg:block hidden">
                        <div class="rounded-md">
                          <ul class="list-none px-2 m-0 text-[15px] font-sans1 text-[#1D2939] font-sans1">
                            <DropdownLink 
                              :href="route('profile.edit')"
                              class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto">
                                <path fill="currentColor"
                                  d="M5.85 17.1c.85-.65 1.8-1.163 2.85-1.538A9.744 9.744 0 0 1 12 15c1.15 0 2.25.187 3.3.562 1.05.375 2 .888 2.85 1.538a7.737 7.737 0 0 0 1.363-2.325A7.845 7.845 0 0 0 20 12c0-2.217-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12c0 .983.163 1.908.488 2.775A7.72 7.72 0 0 0 5.85 17.1ZM12 13c-.983 0-1.813-.337-2.488-1.012S8.5 10.483 8.5 9.5c0-.983.337-1.813 1.012-2.488S11.017 6 12 6c.983 0 1.813.337 2.488 1.012S15.5 8.517 15.5 9.5c0 .983-.337 1.813-1.012 2.488S12.983 13 12 13Zm0 9a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z">
                                </path>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">My Profile</span>
                            </DropdownLink>
                            <li class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto">
                                <path fill="currentColor" d="M15.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                <path fill="currentColor"
                                  d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 0 0 0 5 2.47 2.47 0 0 0 1.5-.512 2.486 2.486 0 0 1-1-1.988Z">
                                </path>
                                <path fill="currentColor"
                                  d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2ZM4 18V6h16l.002 12H4Z">
                                </path>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">Plans &
                                Billing</span>
                            </li>
                            <li class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                class="stroke-ele h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto" width="21"
                                height="21" fill="none" viewBox="0 0 24 24">
                                <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2">
                                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                  <path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                  <path d="M18 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                  <path d="M2 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                  <path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                  <path d="M12 6v3M15 12h3M12 15v3M9 12H6"></path>
                                </g>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">Plans &
                                Integrations</span>
                            </li>
                            <li class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.233 4.233"
                                class="h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width=".365"
                                  d="M3.307 3.836H1.19a.528.528 0 0 1-.53-.529V.927c0-.293.237-.53.53-.53h2.117c.294 0 .53.237.53.53v2.38c0 .293-.236.53-.53.53z"
                                  paint-order="markers fill stroke"></path>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width=".365"
                                  d="M2.925 1.657a.539.539 0 1 1-1.077 0 .539.539 0 0 1 1.077 0zM1.643 3.116c0-.243.196-.439.439-.439h.61c.242 0 .438.196.438.439M.398 1.111H.98M.398 3.035H.98m-.582-.88H.98"
                                  paint-order="markers fill stroke"></path>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">Plans &
                                Contact Manager</span>
                            </li>
                            <li class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27"
                                class="h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto">
                                <path fill="currentColor" fill-rule="evenodd"
                                  d="M15.446 19.642a8.257 8.257 0 0 0 6.602-8.088V0H5.542v11.554a8.256 8.256 0 0 0 6.603 8.088v3.466H8.844v3.301h9.903v-3.301h-3.301v-3.466ZM8.844 3.302h9.903v8.252a4.951 4.951 0 1 1-9.903 0V3.301Z"
                                  clip-rule="evenodd"></path>
                                <path fill="currentColor"
                                  d="M23.699 3.3H27v8.254h-3.301V3.3Zm-19.807 0H.591v8.254h3.301V3.3Z"></path>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">Plans &
                                Rewards</span>
                            </li>
                            <li class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                class="h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto">
                                <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="62"
                                  d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                  stroke-width="62" d="M338.29 338.29 448 448"></path>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">Plans &
                                Explore Apps</span>
                            </li>
                            <li class="flex gap-1 px-2 py-[5px] rounded-[4px] hover:bg-[#E7E7EF]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                class="stroke-ele h-5 w-5 text-[#828282] group-hover:hover:text-primary my-auto"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M10.833 10h7.5m0 0-2.777-3.334M18.333 10l-2.777 3.334m-3.89-7.5V4.31a1.665 1.665 0 0 0-1.805-1.66l-6.666.554a1.667 1.667 0 0 0-1.528 1.661v10.267a1.667 1.667 0 0 0 1.528 1.66l6.666.556a1.666 1.666 0 0 0 1.805-1.661v-1.522">
                                </path>
                              </svg>
                              <span class="text-[14px] font-sans1 text-[#1D2939] py-[5px] px-[10px]">Plans &
                                Sign Out</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </template>
                  </Dropdown>
                </div>
              </div>
            </div>

            <!-- Hamburger -->
            <div class="-me-2 flex items-center sm:hidden">
              <button @click="
                showingNavigationDropdown =
                !showingNavigationDropdown
                "
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path :class="{
                    hidden: showingNavigationDropdown,
                    'inline-flex':
                      !showingNavigationDropdown,
                  }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path :class="{
                    hidden: !showingNavigationDropdown,
                    'inline-flex':
                      showingNavigationDropdown,
                  }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{
          block: showingNavigationDropdown,
          hidden: !showingNavigationDropdown,
        }" class="sm:hidden">
          <div class="space-y-1 pb-3 pt-2">
            <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
              Dashboard
            </ResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="border-t border-gray-200 pb-1 pt-4">
            <div class="px-4">
              <div class="text-base font-medium text-gray-800">
                {{ $page.props.auth.user.name }}
              </div>
              <div class="text-sm font-medium text-gray-500">
                {{ $page.props.auth.user.email }}
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <ResponsiveNavLink :href="route('profile.edit')">
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page Heading -->
      <header class="bg-white shadow" v-if="$slots.header">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
