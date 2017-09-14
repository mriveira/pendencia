using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;
using System.ComponentModel.DataAnnotations.Schema;
using Common.Domain;

namespace Target.Pendencias.Domain.Entitys
{
    public class PendenciaTempos : PendenciaTemposBase
    {

        public PendenciaTempos()
        {

        }

        public PendenciaTempos(int pendenciatemposid, int pendenciaid, int usuarioid, DateTime inicio) : base(pendenciatemposid, pendenciaid, usuarioid, inicio)
        {
        }

        public class PendenciaTemposFactory
        {
            public PendenciaTempos GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendenciaTempos(data.PendenciaTemposId,
                                        data.PendenciaId,
                                        user.GetTenantId<int>(),
                                        data.Inicio);

                construction.SetarFim(data.Fim);
                construction.SetarNota(data.Nota);


                return construction;
            }

           
            public PendenciaTempos GetPlayInstance(dynamic data, CurrentUser user)
            {
                var construction = new PendenciaTempos(0, data.PendenciaId, data.UsuarioId, data.Inicio);
                construction.SetUserCreate(user.GetSubjectId<int>());
                return construction;
            }

        }


        [NotMapped]
        public double TempoDecorrido
        {
            get
            {

                var td = DateTime.Now.ToTimeZone().Subtract(Inicio).TotalHours;
                if (this.Fim.IsNotNull())
                    td = this.Fim.Value.Subtract(this.Inicio).TotalHours;

                return td;
            }
        }

        [NotMapped]
        public string TempoDecorridoTimeSheet
        {
            get
            {
                return _TempoDecorridoTimeSheet();
            }
        }


      

        public bool IsValid()
        {
            base._validationResult = new PendenciaTemposEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }

        public override void SetarFim(DateTime? fim)
        {
            this.Fim = fim.IsNotNull() ? fim.Value.ToTimeZone() : fim;
        }


        internal void EditarTempo(DateTime inicio, DateTime? fim, string nota)
        {

            this.Inicio = inicio.ToTimeZone();
            this.SetarFim(fim);
            this.SetarNota(nota);
        }



        public int TempoDecorridoMinutos()
        {
            var fim = DefineFim();
            var initialMinutes = this.Inicio.Minute;
            var endMinutes = fim.Minute;
            var totalMinutes = endMinutes - initialMinutes;
            return totalMinutes;
        }

        public int TempoDecorridoHoras()
        {
            var fim = DefineFim();
            var initialHour = this.Inicio.Hour;
            var endHour = fim.Hour;
            var totalHours = endHour - initialHour;
            return totalHours;
        }

        private string _TempoDecorridoTimeSheet()
        {
            TimeSpan result = CalcularDiferencaTimeSheet();
            return result.ToString(@"hh\:mm");
        }

        public TimeSpan CalcularDiferencaTimeSheet()
        {
            var fim = this.Fim.IsNotNull() ? this.Fim.Value : DateTime.Now.ToTimeZone();
            var result = fim.TodayHoursZeroMs().Subtract(this.Inicio.TodayHoursZeroMs());
            return result;
        }


        private DateTime DefineFim()
        {
            var fim = DateTime.Now.ToTimeZone();
            if (this.Fim.IsNotNull())
                fim = this.Fim.Value;
            return fim;
        }

    }
}
