<template>
  <HeroSection source="assets/top-image2.png" title="Who are we?" />
  <EmployeeTemplate
    v-if="!isLoading"
    :name="employees[0].title.rendered"
    :title="employees[0].professional_title"
    :about="employees[0].about"
    :educations="employees[0].education"
    :seminars="employees[0].seminars"
    :image="employees[0].image_url"
  />
  <div class="about-divider">
    <div class="about-content">
      <div class="left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          obcaecati debitis praesentium dolorem in, accusamus nemo mollitia.
          Exercitationem nisi tenetur earum, ad culpa deserunt! Accusantium
          natus itaque ipsam minima sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam voluptatem nobis perferendis vel
          in eligendi id quas repudiandae, sint temporibus.
        </p>
      </div>
      <div class="right">
        <img src="/assets/logo-medium.png" alt="" />
      </div>
    </div>
  </div>
  <span v-if="!isLoading">
    <EmployeeTemplate
      v-for="employee in employees.slice(1)"
      :key="employee.title.rendered"
      :name="employee.title.rendered"
      :title="employee.professional_title"
      :about="employee.about"
      :educations="employee.education"
      :seminars="employee.seminars"
      :image="employee.image_url"
      class="last-employee"
    />
  </span>
</template>

<script>
  import apiUrl from '../config.js'
  import EmployeeTemplate from '../components/EmployeeTemplate.vue'
  import HeroSection from '../components/HeroSection.vue'

  export default {
    data() {
      return {
        isLoading: true,
        employeeImages: []
      }
    },
    methods: {
      async populateEmployeeImages() {
        try {
          for (const employee of this.employees) {
            const imageUrl = await this.getFeaturedImageUrl(employee)
            console.log('Image URL for', employee.title.rendered, ':', imageUrl)
            this.employeeImages.push(imageUrl)
          }
        } catch (error) {
          console.error('Error populating employee images:', error)
        }
      },
      async getFeaturedImageUrl(employee) {
        try {
          if (employee.featured_media !== 0) {
            let response = await fetch(
              employee._links['wp:featuredmedia'][0].href
            )
            let mediaData = await response.json()
            return mediaData.source_url
          } else {
            return ''
          }
        } catch (error) {
          console.error('Error fetching featured image:', error)
          return '' // Return empty string if there's an error
        }
      },
      async getData() {
        try {
          let response = await fetch(apiUrl + '/wp-json/wp/v2/employees')
          this.employees = await response.json()
          // console.log(this.employees[1].about)
          // await this.populateEmployeeImages() // Populate the employeeImages array

          // Loop through each employee object
          for (const employee of this.employees) {
            // Get the image ID from the profile_picture field
            const imageId = employee.profile_picture
            if (imageId) {
              // Fetch the image URL using the image ID
              const imageUrlResponse = await fetch(
                apiUrl + `/wp-json/wp/v2/media/${imageId}`
              )
              const imageUrlData = await imageUrlResponse.json()
              const imageUrl = imageUrlData.source_url

              // Append the image URL to the employee object
              employee.image_url = imageUrl
            } else {
              // Set a default image URL if no profile_picture is provided
              employee.image_url = '' // or any default image URL you prefer
            }
          }

          this.sortByDate()
          this.isLoading = false
        } catch (error) {
          console.log(error)
          this.isLoading = false
        }
      },
      async sortByDate() {
        await this.employees.sort((a, b) => {
          // Assuming 'date' is the property that holds the date in each object
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)

          // Sort in descending order (latest date first)
          return dateA - dateB

          // If you want to sort in ascending order (earliest date first), use:
          // return dateA - dateB;
        })
      }
    },
    components: {
      HeroSection,
      EmployeeTemplate
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
  .about-divider {
    background-color: var(--color-secondary);
    color: var(--color-primary-darkest);
    min-height: 100px;
    margin: 1.5rem auto;
    .about-content {
      .left {
        p {
          padding: 1.5rem;
        }
      }
      .right {
        text-align: center;
        img {
          width: 250px;
        }
      }
    }
  }
  .last-employee {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    .about-divider {
      margin: 3rem auto;
      .about-content {
        // margin-left: 25%;
        // margin-right: 25%;
        max-width: var(--max-width-container);
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .left {
          width: 50%;
        }
        .right {
          width: 50%;
        }
      }
    }
    .last-employee {
      margin-bottom: 3rem;
    }
  }
</style>
