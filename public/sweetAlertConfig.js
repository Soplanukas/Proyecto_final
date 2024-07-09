// sweetAlertConfig.js

document.addEventListener('DOMContentLoaded', function() {
    // Código para manejar la eliminación de vuelos
    const deleteFlightButtons = document.querySelectorAll('.delete-flight-button');
    deleteFlightButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const flightId = this.getAttribute('data-flight-id');
            confirmDeleteFlight(flightId);
        });
    });

    // Código para manejar la confirmación al agregar un vuelo
    const addFlightForm = document.querySelector('form[action="/flights"]');
    if (addFlightForm) {
        addFlightForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío estándar del formulario

            // Aquí podrías agregar la lógica para enviar el formulario con Ajax si lo deseas

            // Simulando la respuesta exitosa (esto es donde normalmente harías una petición Ajax)
            // Por simplicidad, simplemente mostramos el SweetAlert
            Swal.fire({
                title: 'Vuelo agregado correctamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500 // Tiempo en milisegundos
            }).then(() => {
                addFlightForm.submit(); // Envía el formulario después de mostrar el SweetAlert
            });
        });
    }

    // Código para manejar la confirmación al editar un vuelo
    const editFlightForm = document.querySelector('form[action^="/flights/edit/"]');
    if (editFlightForm) {
        editFlightForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío estándar del formulario

            // Aquí podrías agregar la lógica para enviar el formulario con Ajax si lo deseas

            // Simulando la respuesta exitosa (esto es donde normalmente harías una petición Ajax)
            // Por simplicidad, simplemente mostramos el SweetAlert
            Swal.fire({
                title: 'Vuelo editado correctamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500 // Tiempo en milisegundos
            }).then(() => {
                editFlightForm.submit(); // Envía el formulario después de mostrar el SweetAlert
            });
        });
    }

    // Código para manejar la eliminación de categorías
    const deleteCategoryButtons = document.querySelectorAll('.delete-category-button');
    deleteCategoryButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const categoryId = this.getAttribute('data-category-id');
            confirmDeleteCategory(categoryId);
        });
    });

    // Código para manejar la confirmación al agregar una categoría
    const addCategoryForm = document.querySelector('form[action="/categories"]');
    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío estándar del formulario

            // Aquí podrías agregar la lógica para enviar el formulario con Ajax si lo deseas

            // Simulando la respuesta exitosa (esto es donde normalmente harías una petición Ajax)
            // Por simplicidad, simplemente mostramos el SweetAlert
            Swal.fire({
                title: 'Categoría agregada correctamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500 // Tiempo en milisegundos
            }).then(() => {
                addCategoryForm.submit(); // Envía el formulario después de mostrar el SweetAlert
            });
        });
    }

    // Código para manejar la confirmación al editar una categoría
    const editCategoryForms = document.querySelectorAll('form[action^="/categories/edit/"]');
    editCategoryForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío estándar del formulario

            // Aquí podrías agregar la lógica para enviar el formulario con Ajax si lo deseas

            // Simulando la respuesta exitosa (esto es donde normalmente harías una petición Ajax)
            // Por simplicidad, simplemente mostramos el SweetAlert
            Swal.fire({
                title: 'Categoría editada correctamente',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500 // Tiempo en milisegundos
            }).then(() => {
                form.submit(); // Envía el formulario después de mostrar el SweetAlert
            });
        });
    });
});

// Función para confirmar eliminación de vuelo
function confirmDeleteFlight(flightId) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar vuelo'
    }).then((result) => {
        if (result.isConfirmed) {
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `/flights/delete/${flightId}`;
            document.body.appendChild(form);
            form.submit();
        }
    });
}

// Función para confirmar eliminación de categoría
function confirmDeleteCategory(categoryId) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar categoría'
    }).then((result) => {
        if (result.isConfirmed) {
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `/categories/delete/${categoryId}`;
            document.body.appendChild(form);
            form.submit();
        }
    });
}
