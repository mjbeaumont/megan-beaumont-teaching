<template>
    <Layout>
        <section class="w-full py-24 xl:py-56 md:pt-48 lg:py-32 xl:py-56 bg-primary-100 flex items-center justify-end hero relative">
            <div class="w-6/12 hidden md:block">
                <g-image src="@/assets/images/megan-homepage-2.png" class="absolute bottom-0 left-0 w-6/12"></g-image>
            </div>
            <div class="w-full md:w-6/12 flex">
                <div class="w-4/5 max-w-md flex flex-col mx-auto">
                    <h1 class="font-heading text-3xl mb-8 font-bold text-white tracking-wide">Personalized Clarinet &amp; Saxophone Lessons in Bergen County, NJ</h1>
                    <a class="bg-secondary-300 hover:bg-secondary-100 font-bold font-xl py-4 px-8 text-white tracking-wider rounded shadow transition-colors duration-300 cursor-pointer w-40"
                       @click.prevent="scrollToContent">Get Started</a>
                </div>
            </div>
        </section>
        <section class="bg-gray-100 w-full py-24 md:py-40">
            <div class="container flex flex-no-wrap flex-col md:flex-row justify-center mx-auto">
                <div class="w-full md:w-4/12 lg:w-3/12 text-center mb-16 md:mb-0">
                    <svg class="icon stroke-current text-primary-300 mx-auto" width="64" height="64"
                         fill="none" viewBox="0 0 38 38">
                        <path d="M27.719 13.062l0.281 4.937c0.125 2.203-4.484 4-10 4s-10.125-1.797-10-4l0.281-4.937 8.969 2.828c0.25 0.078 0.5 0.109 0.75 0.109s0.5-0.031 0.75-0.109zM36 8c0 0.219-0.141 0.406-0.344 0.484l-17.5 5.5c-0.063 0.016-0.109 0.016-0.156 0.016s-0.094 0-0.156-0.016l-10.187-3.219c-0.891 0.703-1.516 2.422-1.641 4.531 0.594 0.344 0.984 0.969 0.984 1.703 0 0.703-0.359 1.313-0.906 1.672l0.906 6.766c0.016 0.141-0.031 0.281-0.125 0.391s-0.234 0.172-0.375 0.172h-3c-0.141 0-0.281-0.063-0.375-0.172s-0.141-0.25-0.125-0.391l0.906-6.766c-0.547-0.359-0.906-0.969-0.906-1.672 0-0.75 0.422-1.391 1.016-1.734 0.094-1.828 0.562-3.797 1.531-5.156l-5.203-1.625c-0.203-0.078-0.344-0.266-0.344-0.484s0.141-0.406 0.344-0.484l17.5-5.5c0.063-0.016 0.109-0.016 0.156-0.016s0.094 0 0.156 0.016l17.5 5.5c0.203 0.078 0.344 0.266 0.344 0.484z"></path>
                    </svg>
                    <p class="mt-6 px-12">DMA in Music Performance From Stony Brook University</p>
                </div>
                <div class="w-full text-center md:w-4/12 mb-16 md:mb-0 lg:w-3/12">
                    <svg height="64" viewBox="0 0 570 570" width="64" class="icon fill-current text-primary-300 mx-auto">
                        <g>
                            <path d="m508.012 25.414-21.427-21.427c-4.935-4.934-12.745-5.339-18.162-.937 0 0-32.585 26.482-32.775 26.671l-278.02 278.02c-5.028-1.489-10.699-.254-14.661 3.706l-13.405 13.405c-2.635 2.635-4.135 6.095-4.294 9.796-6.53 4.497-14.388 9.708-23.205 15.168-3.525 2.183-4.614 6.81-2.43 10.335 2.184 3.526 6.812 4.614 10.335 2.43 8.31-5.146 15.75-10.045 22.075-14.364l31.72 31.721c-12.857 18.797-30.797 47.411-44.527 78.641l-65.819-65.819c7.243-3.189 14.693-6.758 22.263-10.668l3.522-1.841c3.67-1.929 5.083-6.468 3.153-10.139-1.929-3.672-6.47-5.081-10.139-3.153l-3.45 1.803c-9.177 4.74-18.162 8.951-26.784 12.563l-.395-.395c-7.171-7.169-18.833-7.167-26.002 0l-10.199 10.203c-3.473 3.471-5.386 8.089-5.386 13s1.912 9.528 5.385 13l89.481 89.481c3.472 3.473 8.09 5.385 13 5.385 4.912 0 9.529-1.913 13-5.385l10.201-10.2c7.168-7.169 7.168-18.833 0-26.002l-.395-.394c13.783-32.898 33.405-63.956 46.702-83.287 3.691-.165 7.142-1.664 9.77-4.292l13.409-13.407c3.96-3.961 5.195-9.632 3.705-14.66l23.072-23.072c3.523 1.81 7.391 2.724 11.262 2.724 3.883 0 7.764-.918 11.295-2.739l1.957 1.957c3.734 3.734 8.699 5.789 13.979 5.788 5.28 0 10.244-2.057 13.978-5.791l109.67-109.712c7.704-7.707 7.702-20.245-.003-27.951l-1.935-1.935c1.779-3.444 2.726-7.284 2.726-11.272s-.947-7.828-2.726-11.272l50.784-50.784s0 0 0-.001l10.175-10.174c2.932-2.933 2.932-7.686 0-10.619-2.933-2.931-7.686-2.931-10.619 0l-4.865 4.865-25.393-25.393 33.341-33.341 25.394 25.394-3.825 3.824c-2.932 2.933-2.932 7.686 0 10.619 2.933 2.931 7.686 2.931 10.619 0l9.134-9.134c.19-.19 26.67-32.774 26.67-32.774 4.403-5.417 4-13.226-.936-18.165zm-387.564 460.382-10.2 10.201c-.858.858-1.861.986-2.382.986s-1.523-.128-2.382-.987l-89.481-89.481c-.859-.858-.987-1.86-.987-2.381s.128-1.523.987-2.381l10.2-10.2c.656-.657 1.519-.985 2.383-.985.862 0 1.725.328 2.381.985l44.74 44.74 40.81 40.81 3.929 3.929c1.316 1.313 1.316 3.451.002 4.764zm56.255-114.151-36.348-36.348 13.054-13.054 36.348 36.348zm55.101-55.436c-3.743-3.744-3.743-9.835-.001-13.577 1.872-1.872 4.331-2.808 6.79-2.808 2.458 0 4.917.937 6.788 2.808 3.743 3.742 3.743 9.833 0 13.576-3.743 3.744-9.835 3.743-13.577.001zm37.377 6.413c-.897.897-2.091 1.392-3.36 1.392s-2.461-.494-3.359-1.391l-1.974-1.974c3.601-7.038 3.6-15.457-.014-22.492l9.207-9.207c3.523 1.81 7.391 2.724 11.263 2.724 3.871 0 7.739-.914 11.262-2.724l5.318 5.318zm33.643-66.815 9.207-9.207c3.523 1.81 7.39 2.723 11.262 2.723 3.871 0 7.739-.914 11.262-2.724l5.311 5.311-31.725 31.738-5.319-5.318c3.616-7.045 3.621-15.478.002-22.523zm27.262-24.304c-.002.002-.003.003-.005.005-.001.001-.002.003-.004.005-3.744 3.739-9.831 3.737-13.572-.005-3.743-3.742-3.743-9.833 0-13.576 1.871-1.872 4.329-2.808 6.788-2.808s4.917.936 6.789 2.807c3.741 3.742 3.742 9.829.004 13.572zm-42.356 42.355c-3.743 3.745-9.835 3.743-13.576 0-3.743-3.742-3.743-9.834 0-13.576 1.871-1.872 4.33-2.808 6.789-2.808 2.458 0 4.917.936 6.788 2.808 3.743 3.742 3.743 9.833-.001 13.576zm91.12-60.947-28.368 28.379-5.31-5.31c3.616-7.044 3.621-15.477.001-22.522l9.197-9.197c3.444 1.778 7.284 2.726 11.272 2.726s7.828-.947 11.272-2.726l1.935 1.935c1.853 1.85 1.853 4.863.001 6.715zm-6.413-23.76c-.002.002-.004.004-.007.006-.002.002-.003.003-.005.005-1.813 1.811-4.221 2.807-6.783 2.807-2.564 0-4.974-.998-6.789-2.813-1.813-1.813-2.812-4.223-2.812-6.788 0-2.564.998-4.974 2.813-6.788 1.871-1.872 4.329-2.808 6.788-2.808 2.458 0 4.916.936 6.789 2.808 1.813 1.813 2.812 4.223 2.812 6.788 0 2.563-.996 4.97-2.806 6.783zm4.467-28.662c-9.259-4.757-20.921-3.272-28.667 4.474-4.65 4.65-7.211 10.831-7.211 17.406 0 3.988.947 7.828 2.726 11.272l-9.197 9.197c-9.259-4.757-20.922-3.272-28.669 4.475-7.746 7.746-9.231 19.41-4.475 28.669l-9.207 9.207c-9.26-4.756-20.924-3.27-28.669 4.474-7.746 7.746-9.231 19.41-4.474 28.67l-9.207 9.207c-9.259-4.757-20.922-3.272-28.669 4.474-7.746 7.746-9.231 19.409-4.474 28.669l-21.813 21.813-25.394-25.394 203.819-203.819 25.393 25.393zm45.486-45.486-13.055 13.055-25.393-25.393 13.055-13.055zm54-55.157-24.236-24.236 24.73-20.087 19.592 19.592z"/>
                        </g>
                    </svg>
                    <p class="mt-6 px-12">Extensive performance experience on Broadway (Phantom of the Opera, Wicked) and with symphony orchestras</p>
                </div>
                <div class="w-full text-center md:w-4/12 lg:w-3/12">
                    <svg viewBox="0 0 90 90" class="icon fill-current text-primary-300 mx-auto" width="64" height="64">
<g>
	<path d="M42.899,4.5c-0.465-2.279-2.484-4-4.899-4c-0.552,0-1,0.447-1,1s0.448,1,1,1c1.654,0,3,1.346,3,3s-1.346,3-3,3
		c-0.552,0-1,0.447-1,1s0.448,1,1,1c2.414,0,4.434-1.721,4.899-4H56v9H2v-9h14h3c0.552,0,1-0.447,1-1s-0.448-1-1-1h-1.816
		c0.414-1.162,1.514-2,2.816-2c1.654,0,3,1.346,3,3s-1.346,3-3,3c-0.552,0-1,0.447-1,1s0.448,1,1,1c2.757,0,5-2.243,5-5
		s-2.243-5-5-5c-2.414,0-4.434,1.721-4.899,4H0v13v40h58v-40v-13H42.899z M56,55.5H2v-38h54V55.5z"/>
    <path d="M26,2.5c1.654,0,3,1.346,3,3s-1.346,3-3,3c-0.552,0-1,0.447-1,1s0.448,1,1,1c2.757,0,5-2.243,5-5s-2.243-5-5-5
		c-0.552,0-1,0.447-1,1S25.448,2.5,26,2.5z"/>
    <path d="M32,2.5c1.654,0,3,1.346,3,3s-1.346,3-3,3c-0.552,0-1,0.447-1,1s0.448,1,1,1c2.757,0,5-2.243,5-5s-2.243-5-5-5
		c-0.552,0-1,0.447-1,1S31.448,2.5,32,2.5z"/>
    <path d="M9,25.5h22c0.552,0,1-0.447,1-1s-0.448-1-1-1H9c-0.552,0-1,0.447-1,1S8.448,25.5,9,25.5z"/>
    <path d="M49,39.5H34c-0.552,0-1,0.447-1,1s0.448,1,1,1h15c0.552,0,1-0.447,1-1S49.552,39.5,49,39.5z"/>
    <path d="M9,33.5h10c0.552,0,1-0.447,1-1s-0.448-1-1-1H9c-0.552,0-1,0.447-1,1S8.448,33.5,9,33.5z"/>
    <path d="M49,47.5H39c-0.552,0-1,0.447-1,1s0.448,1,1,1h10c0.552,0,1-0.447,1-1S49.552,47.5,49,47.5z"/>
    <path d="M28,32.5c0,0.553,0.448,1,1,1h15c0.552,0,1-0.447,1-1s-0.448-1-1-1H29C28.448,31.5,28,31.947,28,32.5z"/>
    <path d="M24.71,33.21C24.89,33.02,25,32.76,25,32.5c0-0.261-0.11-0.521-0.29-0.71c-0.37-0.37-1.05-0.37-1.42,0
		C23.11,31.979,23,32.239,23,32.5c0,0.26,0.11,0.52,0.29,0.71c0.19,0.189,0.45,0.29,0.71,0.29C24.26,33.5,24.52,33.399,24.71,33.21z
		"/>
    <path d="M13,40.5c0,0.553,0.448,1,1,1h15c0.552,0,1-0.447,1-1s-0.448-1-1-1H14C13.448,39.5,13,39.947,13,40.5z"/>
    <path d="M9,41.5c0.26,0,0.52-0.11,0.71-0.29C9.89,41.02,10,40.76,10,40.5c0-0.261-0.11-0.521-0.29-0.7
		c-0.37-0.38-1.05-0.38-1.42-0.01C8.11,39.979,8,40.239,8,40.5c0,0.26,0.11,0.52,0.29,0.71C8.48,41.39,8.73,41.5,9,41.5z"/>
    <path d="M49,33.5c0.26,0,0.52-0.101,0.71-0.29C49.9,33.02,50,32.76,50,32.5c0-0.261-0.1-0.521-0.29-0.71
		c-0.38-0.37-1.05-0.37-1.42,0C48.11,31.979,48,32.239,48,32.5c0,0.26,0.11,0.52,0.29,0.71C48.48,33.399,48.74,33.5,49,33.5z"/>
    <path d="M34,47.5H9c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S34.552,47.5,34,47.5z"/>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
                        <g>
</g>
</svg>                  <p class="mt-6 px-12">20+ years of experience teaching students from 7-70.</p>
                </div>
            </div>
        </section>
        <section class="w-full flex ">
            <div class="container p-4 md:py-24 mx-auto flex flex-wrap justify-center">
                <h2 class="text-3xl font-heading w-full text-center mb-16 font-semibold">Key Features</h2>
                <ul class="list-none text-xl features">
                    <li class="mb-8"><strong class="font-bold">No cookie cutter lessons.</strong> Personalized lesson plans tailored to each students' specific needs</li>
                    <li class="mb-8"><strong class="font-bold">Affordable rates.</strong> Lessons available in 30, 45 and 60 minute time slots.</li>
                    <li><strong class="font-bold">Flexible Options.</strong> In-person (at your home or my studio) or online (Zoom/Facetime) lessons available.</li>
                </ul>
            </div>
        </section>
        <section class="w-full flex flex-wrap bg-gray-100" id="contact">
            <div class="w-full lg:w-6/12">
                <g-image src="@/assets/images/saxophone-music.jpg" class="object-cover h-full"></g-image>
            </div>
            <div class="w-full lg:w-6/12 px-12">
                <h2 class="text-3xl font-heading font-semibold mt-8">Let's get started!</h2>
                <form class="pt-6 pb-8 mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" placeholder="Name">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Email</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="email" placeholder="Email">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Phone (optional)</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="phone" placeholder="Phone">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Message</label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 h-32 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message"></textarea>
                    <input type="submit" value="Send Message" class="bg-primary-300 hover:bg-secondary-100 font-bold font-xl py-4 px-8 text-white tracking-wider rounded shadow transition-colors duration-300">
                </form>
            </div>
        </section>
    </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Megan Shumate Beaumont, Clarinet and Saxophone Teacher'
    },
    methods: {
      scrollToContent() {
        document.getElementById('contact').scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
</script>

<style>

    .home-links a {
        margin-right: 1rem;
    }

    .features li:before {
        content: '';
        display: inline-block;
        height: 1em;
        width: 1em;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDQ4IDQ4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc0NjQ2IgogICBzb2RpcG9kaTpkb2NuYW1lPSJjaGVjayBncmVlbiBjaXJjbGUuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NjUwIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAyNyIKICAgICBpZD0ibmFtZWR2aWV3NDY0OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iNC45MTY2NjY3IgogICAgIGlua3NjYXBlOmN4PSIyNCIKICAgICBpbmtzY2FwZTpjeT0iMjQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9Imc0NjQ0IiAvPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0NjM4Ij4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9IjAiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHkxPSI0Ny44NSIKICAgICAgIHgyPSIwIgogICAgICAgeTI9Ii0yLjI5MiI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0b3AtY29sb3I9IiM0ZGE3MGUiCiAgICAgICAgIGlkPSJzdG9wNDYzMyIgLz4KICAgICAgPHN0b3AKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBzdG9wLWNvbG9yPSIjOWRlZDQ2IgogICAgICAgICBpZD0ic3RvcDQ2MzUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KC45MjMwNyAwIDAgLjkyMzA3LTI0Ljg5MSAyLjcxMikiCiAgICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyIKICAgICBpZD0iZzQ2NDQiCiAgICAgc3R5bGU9ImZpbGwtb3BhY2l0eToxO29wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybyI+CiAgICA8Y2lyY2xlCiAgICAgICByPSIyNiIKICAgICAgIGN5PSIyMy4wNyIKICAgICAgIGN4PSI1Mi45NyIKICAgICAgIGZpbGw9InVybCgjMCkiCiAgICAgICBpZD0iY2lyY2xlNDY0MCIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOiM1NWQ0MDAiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibTY2LjgwNCAxNi43MTJsLTIuNTE4LTIuNTE4Yy0uMzQ1LS4zNDYtLjc2Ni0uNTE4LTEuMjU5LS41MTgtLjQ5NCAwLS45MTQuMTczLTEuMjU5LjUxOGwtMTIuMTQ4IDEyLjE2Ny01LjQ0NC01LjQ2M2MtLjM0Ni0uMzQ2LS43NjYtLjUxOC0xLjI1OS0uNTE4LS40OTQgMC0uOTE0LjE3My0xLjI1OS41MThsLTIuNTE4IDIuNTE4Yy0uMzQ2LjM0Ni0uNTE4Ljc2Ni0uNTE4IDEuMjU5IDAgLjQ5NC4xNzMuOTE0LjUxOCAxLjI1OWw2LjcwNCA2LjcwNCAyLjUxOSAyLjUxOGMuMzQ1LjM0Ni43NjUuNTE4IDEuMjU5LjUxOC40OTQgMCAuOTE0LS4xNzMgMS4yNTktLjUxOGwyLjUxOS0yLjUxOCAxMy40MDctMTMuNDA3Yy4zNDUtLjM0Ni41MTgtLjc2Ni41MTgtMS4yNTkgMC0uNDk0LS4xNzMtLjkxNC0uNTE4LTEuMjU5IgogICAgICAgZmlsbD0iI2ZmZiIKICAgICAgIGZpbGwtb3BhY2l0eT0iLjg1MSIKICAgICAgIGlkPSJwYXRoNDY0MiIKICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybyIgLz4KICA8L2c+Cjwvc3ZnPgo=");
        background-size: contain;
        background-repeat: no-repeat;
        margin-right:0.5em;
    }

</style>
