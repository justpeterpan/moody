<template>
  <header>
    <!-- <h2>Overview</h2> -->
    <!-- <div>
      <ul v-for="mood in userMoods" :key="mood.moods">
        <li>{{ mood.emoji }} {{ mood.timestamp.toDate().toDateString() }}</li>
      </ul>
    </div> -->
    <div class="line-chart">
      <Chart v-if="loaded" :chartData="getChartData" :options="getChartOptions" />
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Chart from '@/components/Chart';

export default {
  components: { Chart },
  async mounted() {
    this.loaded = false;
    try {
      this.getUserMoods(this.user.id);
      this.loaded = true;
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  },
  data: () => ({
    loaded: false,
    chartdate: null,
  }),
  computed: {
    ...mapState('user', ['userMoods']),
    ...mapState('auth', ['user']),
    ...mapGetters('user', ['getTimestamps', 'getMoodValues']),
    getChartData() {
      return {
        labels: this.getTimestamps,
        datasets: [
          {
            fill: false,
            borderColor: 'lightcoral',
            borderWidth: 2,
            data: this.getMoodValues,
          },
        ],
      };
    },
    getChartOptions() {
      const labels = {
        '-3': '😠',
        '-2': '😔',
        '-1': '😒',
        0: '😐',
        1: '🤠',
        2: '🤗',
      };
      return {
        responsive: true,
        legend: {
          display: false,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                callback: value => labels[value],
                fontSize: 25,
                min: -3,
                max: 2,
                tick: 1,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                maxRotation: 0,
                minRotation: 0,
                fontSize: 9,
                padding: 20,
              },
              afterTickToLabelConversion: function(data) {
                var xLabels = data.ticks;

                xLabels.forEach(function(labels, i) {
                  if (i % 4 != 0) {
                    xLabels[i] = '';
                  }
                });
              },
            },
          ],
        },
      };
    },
  },
  methods: {
    ...mapActions('user', ['getUserMoods']),
  },
};
</script>

<style>
.line-chart {
  padding-top: 20px;
  margin: 0 auto;
  width: 95vw;
}
</style>
