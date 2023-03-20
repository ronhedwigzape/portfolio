<template>
	<v-hover v-slot="{ isHovering, props }">
		<v-card
			v-bind="props"
			:elevation="isHovering ? 24 : 6"
			class="mx-auto"
			max-width="600px"
		>
			<v-img
				:src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/sportsfest-litmusda/sportsfest-litmusda.PNG`"
				:lazy-src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/sportsfest-litmusda/sportsfest-litmusda.PNG`"
				height="200px"
				cover
			></v-img>

			<v-card-title>
				ACLC Sportsfest Tabulation System
			</v-card-title>

			<v-card-subtitle>
				The ACLC Tabulation System is an all-in-one application that has been
				developed with Vue and PHP to capture and manage judge ratings in diverse
				scenarios. The system is designed to handle large amounts of data and
				provide an effortless and flexible experience for both judges and
				administrators.
			</v-card-subtitle>

			<v-card-actions>
				<v-btn
					color="orange-lighten-2"
					variant="text"
					append-icon="mdi-open-in-new"
					href="https://github.com/ronhedwigzape/sportsfest-litmusda"
					target="_blank"
				>
					See Details
				</v-btn>

				<v-spacer></v-spacer>

				<v-btn
					:icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
					@click="show = !show"
				></v-btn>
			</v-card-actions>

			<v-expand-transition>
				<div v-show="show">
					<v-divider></v-divider>

					<v-card-text>
						The ACLC Tabulation System is an all-in-one application that has been
						developed with Vue and PHP to capture and manage judge ratings in diverse
						scenarios. The system is designed to handle large amounts of data and
						provide an effortless and flexible experience for both judges and
						administrators.
						<br><br>
						Typically, the ACLC Tabulation System includes a user-friendly interface
						that enables judges to input their ratings and comments, in addition to a
						database on the back-end that stores and organizes this information.
						Furthermore, the system may comprise features for data analysis and reporting,
						such as graphs and charts that facilitate administrators to comprehend trends
						and patterns in the data.
						<br><br>
						In the context of competitions or evaluations, the ACLC Tabulation System is
						commonly employed to collect and process ratings from a group of judges who
						assess a series of submissions or performances. The system is highly customizable
						and flexible to meet the specific requirements of the evaluation or competition,
						allowing for tailored settings to be configured by administrators.
						<br><br>
						Overall, the ACLC Tabulation System is a robust and valuable tool that can
						optimize the process of collecting and analyzing judge ratings, providing
						valuable insights that can inform decision-making and enhance the quality of
						the evaluation process.
					</v-card-text>
				</div>
			</v-expand-transition>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	name: "ProjectFour",
	props: ['show']
}
</script>

<style scoped>

</style>