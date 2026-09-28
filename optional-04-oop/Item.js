/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    constructor(id, name, quality, price) {
        this.id = id;
        this.name = name;
        this.quality = quality;
        this.price = price;
    }
    updateDetails(name, quality, price) {
    if(name !== undefined) this.name = name;
    if(quality !== undefined) this.quality = quality;
    if(price !== undefined) this.price = price;
    }    
}

// Jangan hapus kode di bawah ini!
export default Item;
