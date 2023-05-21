<script setup lang="ts">

</script>

<template>
    <div class="section-wrap bg-white">
        <section id="owlme" class="row section">
            <div class="col-xl-6 mb-5">
                <div class="border-gray">
                    <div class="border-gray box-pad">
                        <h2 class="display-1 color-primary mb-4 harry-potter-font">Owl Me</h2>
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nobis quam quasi
                            repellendus rerum temporibus?
                        </p>
                        <p class="mb-3">
                            Lorem ipsum dolor sit amet. <br>
                            Lorem ipsum dolor sit amet. <br>
                            Lorem ipsum dolor.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 mb-5">
                <div class="contact-form-wrap">
                    <form action="" method="POST" class="contact-form">
                        <div class="form-group">
                            <input type="text" id="contact_name" name="contact_name"
                                class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                placeholder="Your Name" required=""/>
                        </div>
                        <div class="form-group">
                            <input type="email" id="contact_email" name="contact_email"
                                class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                placeholder="Your Email" required=""/>
                        </div>
                        <div class="form-group">
                            <textarea rows="4" id="contact_message" name="contact_message"
                                class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                placeholder="Message..." required=""></textarea>
                        </div>
                        <div class="form-group mb-0">
                            <button type="submit" class="btn rounded-0 d-block ml-auto primary-btn">
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>