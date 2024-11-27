<template>
  <div class="calendar-container">
    <!-- En-tête du calendrier -->
    <div class="calendar-header">
      <button @click="prevMonth">&lt;</button>
      <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
      <button @click="nextMonth">&gt;</button>
    </div>

    <!-- Grille du calendrier -->
    <div class="calendar-grid">
      <div class="day-name" v-for="day in dayNames" :key="day">{{ day }}</div>
      <div
        class="day"
        v-for="day in daysInMonth"
        :key="day.date"
        :class="{ 'is-today': day.isToday, 'is-empty': !day.date }"
        @click="selectDate(day.date)"
      >
        {{ day.day }}
      </div>
    </div>

    <!-- Affichage des tâches pour la date sélectionnée -->
    <div v-if="selectedDate" class="selected-date-box">
      <div class="selected-date">
        <h2>Tâches pour {{ formatSelectedDate(selectedDate) }}</h2>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
        </ul>
        <button @click="goToAddView">Ajouter une nouvelle tâche</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      selectedDate: null,
      tasks: [],
      dayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], // Jours de la semaine
    };
  },
  computed: {
    daysInMonth() {
      const days = [];
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

      // Ajouter des jours vides pour aligner avec le premier jour du mois
      for (let i = 0; i < firstDay; i++) {
        days.push({ day: "", date: null });
      }

      // Ajouter les jours du mois
      for (let i = 1; i <= lastDate; i++) {
        const date = new Date(this.currentYear, this.currentMonth, i);
        days.push({
          day: i,
          date: this.formatDate(date), // Format local corrigé
          isToday: this.isToday(date),
        });
      }

      return days;
    },
    monthNames() {
      return [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
      ];
    },
  },
  methods: {
    isToday(date) {
      const today = new Date();
      return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
      );
    },
    formatDate(date) {
      // Générer une date locale sans décalage (format : YYYY-MM-DD)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    formatSelectedDate(date) {
      // Transformer une date au format YYYY-MM-DD en texte lisible
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDate(date) {
      this.selectedDate = date;
      this.loadTasksForDate(date); // Charge les tâches pour la date sélectionnée
    },
    loadTasksForDate(date) {
      // Charger les tâches depuis le localStorage
      const storedTasks = localStorage.getItem(date);
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    },
    goToAddView() {
      if (this.selectedDate) {
        // Redirige vers la vue d'ajout avec la date sélectionnée
        this.$router.push({
          name: "add-view", // Nom de la route
          query: { date: this.selectedDate }, // Date comme paramètre de requête
        }).catch(err => console.error('Erreur de navigation:', err)); // Gestion d'erreur de navigation
      } else {
        alert("Veuillez sélectionner une date avant d'ajouter une tâche !");
      }
    }
  },
};
</script>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 500px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.day-name {
  font-weight: bold;
  color: #555;
}

.day {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.day.is-empty {
  background-color: #f9f9f9;
  pointer-events: none;
}

.day:hover {
  background-color: #f0f0f0;
}

.is-today {
  background-color: #4caf50;
  color: white;
}

.selected-date-box {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

.selected-date ul {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

.selected-date li {
  margin: 5px 0;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}
</style>
